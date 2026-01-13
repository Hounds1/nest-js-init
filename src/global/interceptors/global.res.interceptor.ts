import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
  } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import type { BaseRes } from '../res/global.base.res';
import { isBaseResponse } from '../res/global.base.res';

@Injectable()
export class WrapResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const http = context.switchToHttp();
    const req = http.getRequest<any>();

    const baseExtensions = {
      timestamp: Date.now(),
      requestId: req.headers['x-request-id'] ?? null,
    };

    return next.handle().pipe(
      map((result: any) => {
        if (isBaseResponse(result)) {
          return {
            ...result,
            extensions: {
              ...baseExtensions,
              ...(result.extensions ?? {}),
            },
          } satisfies BaseRes<any>;
        }

        return {
          success: true,
          data: result ?? null,
          extensions: baseExtensions,
        } satisfies BaseRes<any>;
      }),
    );
  }
}