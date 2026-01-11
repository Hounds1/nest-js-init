import { plainToInstance } from "class-transformer";

export class BaseRes<T> {
    success: boolean;
    data: T;
    extensions: Record<string, any>;

    static exchange<T>(origin: T): BaseRes<T> {
        return plainToInstance(BaseRes, {
          success: true,
          data: origin,
          extensions: {},
        }) as BaseRes<T>;
      }

    addExtension(key: string, value: any): this {
        if (!this.extensions) this.extensions = {};
        this.extensions[key] = value;
        return this;
      }
    
      addExtensions(values: Record<string, any>): this {
        if (!this.extensions) this.extensions = {};
        Object.assign(this.extensions, values);
        return this;
    }
}