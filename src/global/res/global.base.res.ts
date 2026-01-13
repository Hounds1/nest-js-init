export type BaseRes<T> = {
   success: boolean,
   data: T | null;
   extensions: Record<string, any>;
}

export function isBaseResponse(x: any): x is BaseRes<any> {
  return (
    x && typeof x === 'object' 
    && typeof x.success === 'boolean' 
    && 'data' in x
  );
}