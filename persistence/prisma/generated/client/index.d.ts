
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DATABASECHANGELOGLOCK
 * 
 */
export type DATABASECHANGELOGLOCK = $Result.DefaultSelection<Prisma.$DATABASECHANGELOGLOCKPayload>
/**
 * Model SESSIONS
 * 
 */
export type SESSIONS = $Result.DefaultSelection<Prisma.$SESSIONSPayload>
/**
 * Model USERS
 * 
 */
export type USERS = $Result.DefaultSelection<Prisma.$USERSPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DATABASECHANGELOGLOCKS
 * const dATABASECHANGELOGLOCKS = await prisma.dATABASECHANGELOGLOCK.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DATABASECHANGELOGLOCKS
   * const dATABASECHANGELOGLOCKS = await prisma.dATABASECHANGELOGLOCK.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.dATABASECHANGELOGLOCK`: Exposes CRUD operations for the **DATABASECHANGELOGLOCK** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DATABASECHANGELOGLOCKS
    * const dATABASECHANGELOGLOCKS = await prisma.dATABASECHANGELOGLOCK.findMany()
    * ```
    */
  get dATABASECHANGELOGLOCK(): Prisma.DATABASECHANGELOGLOCKDelegate<ExtArgs>;

  /**
   * `prisma.sESSIONS`: Exposes CRUD operations for the **SESSIONS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SESSIONS
    * const sESSIONS = await prisma.sESSIONS.findMany()
    * ```
    */
  get sESSIONS(): Prisma.SESSIONSDelegate<ExtArgs>;

  /**
   * `prisma.uSERS`: Exposes CRUD operations for the **USERS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more USERS
    * const uSERS = await prisma.uSERS.findMany()
    * ```
    */
  get uSERS(): Prisma.USERSDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    DATABASECHANGELOGLOCK: 'DATABASECHANGELOGLOCK',
    SESSIONS: 'SESSIONS',
    USERS: 'USERS'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'dATABASECHANGELOGLOCK' | 'sESSIONS' | 'uSERS'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      DATABASECHANGELOGLOCK: {
        payload: Prisma.$DATABASECHANGELOGLOCKPayload<ExtArgs>
        fields: Prisma.DATABASECHANGELOGLOCKFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DATABASECHANGELOGLOCKFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DATABASECHANGELOGLOCKPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DATABASECHANGELOGLOCKFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DATABASECHANGELOGLOCKPayload>
          }
          findFirst: {
            args: Prisma.DATABASECHANGELOGLOCKFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DATABASECHANGELOGLOCKPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DATABASECHANGELOGLOCKFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DATABASECHANGELOGLOCKPayload>
          }
          findMany: {
            args: Prisma.DATABASECHANGELOGLOCKFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DATABASECHANGELOGLOCKPayload>[]
          }
          create: {
            args: Prisma.DATABASECHANGELOGLOCKCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DATABASECHANGELOGLOCKPayload>
          }
          createMany: {
            args: Prisma.DATABASECHANGELOGLOCKCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DATABASECHANGELOGLOCKDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DATABASECHANGELOGLOCKPayload>
          }
          update: {
            args: Prisma.DATABASECHANGELOGLOCKUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DATABASECHANGELOGLOCKPayload>
          }
          deleteMany: {
            args: Prisma.DATABASECHANGELOGLOCKDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DATABASECHANGELOGLOCKUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DATABASECHANGELOGLOCKUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DATABASECHANGELOGLOCKPayload>
          }
          aggregate: {
            args: Prisma.DATABASECHANGELOGLOCKAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDATABASECHANGELOGLOCK>
          }
          groupBy: {
            args: Prisma.DATABASECHANGELOGLOCKGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DATABASECHANGELOGLOCKGroupByOutputType>[]
          }
          count: {
            args: Prisma.DATABASECHANGELOGLOCKCountArgs<ExtArgs>,
            result: $Utils.Optional<DATABASECHANGELOGLOCKCountAggregateOutputType> | number
          }
        }
      }
      SESSIONS: {
        payload: Prisma.$SESSIONSPayload<ExtArgs>
        fields: Prisma.SESSIONSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SESSIONSFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SESSIONSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SESSIONSFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SESSIONSPayload>
          }
          findFirst: {
            args: Prisma.SESSIONSFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SESSIONSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SESSIONSFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SESSIONSPayload>
          }
          findMany: {
            args: Prisma.SESSIONSFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SESSIONSPayload>[]
          }
          create: {
            args: Prisma.SESSIONSCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SESSIONSPayload>
          }
          createMany: {
            args: Prisma.SESSIONSCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SESSIONSDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SESSIONSPayload>
          }
          update: {
            args: Prisma.SESSIONSUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SESSIONSPayload>
          }
          deleteMany: {
            args: Prisma.SESSIONSDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SESSIONSUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SESSIONSUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SESSIONSPayload>
          }
          aggregate: {
            args: Prisma.SESSIONSAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSESSIONS>
          }
          groupBy: {
            args: Prisma.SESSIONSGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SESSIONSGroupByOutputType>[]
          }
          count: {
            args: Prisma.SESSIONSCountArgs<ExtArgs>,
            result: $Utils.Optional<SESSIONSCountAggregateOutputType> | number
          }
        }
      }
      USERS: {
        payload: Prisma.$USERSPayload<ExtArgs>
        fields: Prisma.USERSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.USERSFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$USERSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.USERSFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>
          }
          findFirst: {
            args: Prisma.USERSFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$USERSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.USERSFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>
          }
          findMany: {
            args: Prisma.USERSFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>[]
          }
          create: {
            args: Prisma.USERSCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>
          }
          createMany: {
            args: Prisma.USERSCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.USERSDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>
          }
          update: {
            args: Prisma.USERSUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>
          }
          deleteMany: {
            args: Prisma.USERSDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.USERSUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.USERSUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>
          }
          aggregate: {
            args: Prisma.USERSAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUSERS>
          }
          groupBy: {
            args: Prisma.USERSGroupByArgs<ExtArgs>,
            result: $Utils.Optional<USERSGroupByOutputType>[]
          }
          count: {
            args: Prisma.USERSCountArgs<ExtArgs>,
            result: $Utils.Optional<USERSCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type USERSCountOutputType
   */

  export type USERSCountOutputType = {
    SESSIONS: number
  }

  export type USERSCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SESSIONS?: boolean | USERSCountOutputTypeCountSESSIONSArgs
  }

  // Custom InputTypes

  /**
   * USERSCountOutputType without action
   */
  export type USERSCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERSCountOutputType
     */
    select?: USERSCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * USERSCountOutputType without action
   */
  export type USERSCountOutputTypeCountSESSIONSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SESSIONSWhereInput
  }



  /**
   * Models
   */

  /**
   * Model DATABASECHANGELOGLOCK
   */

  export type AggregateDATABASECHANGELOGLOCK = {
    _count: DATABASECHANGELOGLOCKCountAggregateOutputType | null
    _avg: DATABASECHANGELOGLOCKAvgAggregateOutputType | null
    _sum: DATABASECHANGELOGLOCKSumAggregateOutputType | null
    _min: DATABASECHANGELOGLOCKMinAggregateOutputType | null
    _max: DATABASECHANGELOGLOCKMaxAggregateOutputType | null
  }

  export type DATABASECHANGELOGLOCKAvgAggregateOutputType = {
    ID: number | null
  }

  export type DATABASECHANGELOGLOCKSumAggregateOutputType = {
    ID: number | null
  }

  export type DATABASECHANGELOGLOCKMinAggregateOutputType = {
    ID: number | null
    LOCKED: boolean | null
    LOCKGRANTED: Date | null
    LOCKEDBY: string | null
  }

  export type DATABASECHANGELOGLOCKMaxAggregateOutputType = {
    ID: number | null
    LOCKED: boolean | null
    LOCKGRANTED: Date | null
    LOCKEDBY: string | null
  }

  export type DATABASECHANGELOGLOCKCountAggregateOutputType = {
    ID: number
    LOCKED: number
    LOCKGRANTED: number
    LOCKEDBY: number
    _all: number
  }


  export type DATABASECHANGELOGLOCKAvgAggregateInputType = {
    ID?: true
  }

  export type DATABASECHANGELOGLOCKSumAggregateInputType = {
    ID?: true
  }

  export type DATABASECHANGELOGLOCKMinAggregateInputType = {
    ID?: true
    LOCKED?: true
    LOCKGRANTED?: true
    LOCKEDBY?: true
  }

  export type DATABASECHANGELOGLOCKMaxAggregateInputType = {
    ID?: true
    LOCKED?: true
    LOCKGRANTED?: true
    LOCKEDBY?: true
  }

  export type DATABASECHANGELOGLOCKCountAggregateInputType = {
    ID?: true
    LOCKED?: true
    LOCKGRANTED?: true
    LOCKEDBY?: true
    _all?: true
  }

  export type DATABASECHANGELOGLOCKAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DATABASECHANGELOGLOCK to aggregate.
     */
    where?: DATABASECHANGELOGLOCKWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DATABASECHANGELOGLOCKS to fetch.
     */
    orderBy?: DATABASECHANGELOGLOCKOrderByWithRelationInput | DATABASECHANGELOGLOCKOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DATABASECHANGELOGLOCKWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DATABASECHANGELOGLOCKS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DATABASECHANGELOGLOCKS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DATABASECHANGELOGLOCKS
    **/
    _count?: true | DATABASECHANGELOGLOCKCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DATABASECHANGELOGLOCKAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DATABASECHANGELOGLOCKSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DATABASECHANGELOGLOCKMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DATABASECHANGELOGLOCKMaxAggregateInputType
  }

  export type GetDATABASECHANGELOGLOCKAggregateType<T extends DATABASECHANGELOGLOCKAggregateArgs> = {
        [P in keyof T & keyof AggregateDATABASECHANGELOGLOCK]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDATABASECHANGELOGLOCK[P]>
      : GetScalarType<T[P], AggregateDATABASECHANGELOGLOCK[P]>
  }




  export type DATABASECHANGELOGLOCKGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DATABASECHANGELOGLOCKWhereInput
    orderBy?: DATABASECHANGELOGLOCKOrderByWithAggregationInput | DATABASECHANGELOGLOCKOrderByWithAggregationInput[]
    by: DATABASECHANGELOGLOCKScalarFieldEnum[] | DATABASECHANGELOGLOCKScalarFieldEnum
    having?: DATABASECHANGELOGLOCKScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DATABASECHANGELOGLOCKCountAggregateInputType | true
    _avg?: DATABASECHANGELOGLOCKAvgAggregateInputType
    _sum?: DATABASECHANGELOGLOCKSumAggregateInputType
    _min?: DATABASECHANGELOGLOCKMinAggregateInputType
    _max?: DATABASECHANGELOGLOCKMaxAggregateInputType
  }

  export type DATABASECHANGELOGLOCKGroupByOutputType = {
    ID: number
    LOCKED: boolean
    LOCKGRANTED: Date | null
    LOCKEDBY: string | null
    _count: DATABASECHANGELOGLOCKCountAggregateOutputType | null
    _avg: DATABASECHANGELOGLOCKAvgAggregateOutputType | null
    _sum: DATABASECHANGELOGLOCKSumAggregateOutputType | null
    _min: DATABASECHANGELOGLOCKMinAggregateOutputType | null
    _max: DATABASECHANGELOGLOCKMaxAggregateOutputType | null
  }

  type GetDATABASECHANGELOGLOCKGroupByPayload<T extends DATABASECHANGELOGLOCKGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DATABASECHANGELOGLOCKGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DATABASECHANGELOGLOCKGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DATABASECHANGELOGLOCKGroupByOutputType[P]>
            : GetScalarType<T[P], DATABASECHANGELOGLOCKGroupByOutputType[P]>
        }
      >
    >


  export type DATABASECHANGELOGLOCKSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    LOCKED?: boolean
    LOCKGRANTED?: boolean
    LOCKEDBY?: boolean
  }, ExtArgs["result"]["dATABASECHANGELOGLOCK"]>

  export type DATABASECHANGELOGLOCKSelectScalar = {
    ID?: boolean
    LOCKED?: boolean
    LOCKGRANTED?: boolean
    LOCKEDBY?: boolean
  }


  export type $DATABASECHANGELOGLOCKPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DATABASECHANGELOGLOCK"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      LOCKED: boolean
      LOCKGRANTED: Date | null
      LOCKEDBY: string | null
    }, ExtArgs["result"]["dATABASECHANGELOGLOCK"]>
    composites: {}
  }


  type DATABASECHANGELOGLOCKGetPayload<S extends boolean | null | undefined | DATABASECHANGELOGLOCKDefaultArgs> = $Result.GetResult<Prisma.$DATABASECHANGELOGLOCKPayload, S>

  type DATABASECHANGELOGLOCKCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DATABASECHANGELOGLOCKFindManyArgs, 'select' | 'include'> & {
      select?: DATABASECHANGELOGLOCKCountAggregateInputType | true
    }

  export interface DATABASECHANGELOGLOCKDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DATABASECHANGELOGLOCK'], meta: { name: 'DATABASECHANGELOGLOCK' } }
    /**
     * Find zero or one DATABASECHANGELOGLOCK that matches the filter.
     * @param {DATABASECHANGELOGLOCKFindUniqueArgs} args - Arguments to find a DATABASECHANGELOGLOCK
     * @example
     * // Get one DATABASECHANGELOGLOCK
     * const dATABASECHANGELOGLOCK = await prisma.dATABASECHANGELOGLOCK.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DATABASECHANGELOGLOCKFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DATABASECHANGELOGLOCKFindUniqueArgs<ExtArgs>>
    ): Prisma__DATABASECHANGELOGLOCKClient<$Result.GetResult<Prisma.$DATABASECHANGELOGLOCKPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DATABASECHANGELOGLOCK that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DATABASECHANGELOGLOCKFindUniqueOrThrowArgs} args - Arguments to find a DATABASECHANGELOGLOCK
     * @example
     * // Get one DATABASECHANGELOGLOCK
     * const dATABASECHANGELOGLOCK = await prisma.dATABASECHANGELOGLOCK.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DATABASECHANGELOGLOCKFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DATABASECHANGELOGLOCKFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DATABASECHANGELOGLOCKClient<$Result.GetResult<Prisma.$DATABASECHANGELOGLOCKPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DATABASECHANGELOGLOCK that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DATABASECHANGELOGLOCKFindFirstArgs} args - Arguments to find a DATABASECHANGELOGLOCK
     * @example
     * // Get one DATABASECHANGELOGLOCK
     * const dATABASECHANGELOGLOCK = await prisma.dATABASECHANGELOGLOCK.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DATABASECHANGELOGLOCKFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DATABASECHANGELOGLOCKFindFirstArgs<ExtArgs>>
    ): Prisma__DATABASECHANGELOGLOCKClient<$Result.GetResult<Prisma.$DATABASECHANGELOGLOCKPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DATABASECHANGELOGLOCK that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DATABASECHANGELOGLOCKFindFirstOrThrowArgs} args - Arguments to find a DATABASECHANGELOGLOCK
     * @example
     * // Get one DATABASECHANGELOGLOCK
     * const dATABASECHANGELOGLOCK = await prisma.dATABASECHANGELOGLOCK.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DATABASECHANGELOGLOCKFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DATABASECHANGELOGLOCKFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DATABASECHANGELOGLOCKClient<$Result.GetResult<Prisma.$DATABASECHANGELOGLOCKPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DATABASECHANGELOGLOCKS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DATABASECHANGELOGLOCKFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DATABASECHANGELOGLOCKS
     * const dATABASECHANGELOGLOCKS = await prisma.dATABASECHANGELOGLOCK.findMany()
     * 
     * // Get first 10 DATABASECHANGELOGLOCKS
     * const dATABASECHANGELOGLOCKS = await prisma.dATABASECHANGELOGLOCK.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const dATABASECHANGELOGLOCKWithIDOnly = await prisma.dATABASECHANGELOGLOCK.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends DATABASECHANGELOGLOCKFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DATABASECHANGELOGLOCKFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DATABASECHANGELOGLOCKPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DATABASECHANGELOGLOCK.
     * @param {DATABASECHANGELOGLOCKCreateArgs} args - Arguments to create a DATABASECHANGELOGLOCK.
     * @example
     * // Create one DATABASECHANGELOGLOCK
     * const DATABASECHANGELOGLOCK = await prisma.dATABASECHANGELOGLOCK.create({
     *   data: {
     *     // ... data to create a DATABASECHANGELOGLOCK
     *   }
     * })
     * 
    **/
    create<T extends DATABASECHANGELOGLOCKCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DATABASECHANGELOGLOCKCreateArgs<ExtArgs>>
    ): Prisma__DATABASECHANGELOGLOCKClient<$Result.GetResult<Prisma.$DATABASECHANGELOGLOCKPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DATABASECHANGELOGLOCKS.
     *     @param {DATABASECHANGELOGLOCKCreateManyArgs} args - Arguments to create many DATABASECHANGELOGLOCKS.
     *     @example
     *     // Create many DATABASECHANGELOGLOCKS
     *     const dATABASECHANGELOGLOCK = await prisma.dATABASECHANGELOGLOCK.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DATABASECHANGELOGLOCKCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DATABASECHANGELOGLOCKCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DATABASECHANGELOGLOCK.
     * @param {DATABASECHANGELOGLOCKDeleteArgs} args - Arguments to delete one DATABASECHANGELOGLOCK.
     * @example
     * // Delete one DATABASECHANGELOGLOCK
     * const DATABASECHANGELOGLOCK = await prisma.dATABASECHANGELOGLOCK.delete({
     *   where: {
     *     // ... filter to delete one DATABASECHANGELOGLOCK
     *   }
     * })
     * 
    **/
    delete<T extends DATABASECHANGELOGLOCKDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DATABASECHANGELOGLOCKDeleteArgs<ExtArgs>>
    ): Prisma__DATABASECHANGELOGLOCKClient<$Result.GetResult<Prisma.$DATABASECHANGELOGLOCKPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DATABASECHANGELOGLOCK.
     * @param {DATABASECHANGELOGLOCKUpdateArgs} args - Arguments to update one DATABASECHANGELOGLOCK.
     * @example
     * // Update one DATABASECHANGELOGLOCK
     * const dATABASECHANGELOGLOCK = await prisma.dATABASECHANGELOGLOCK.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DATABASECHANGELOGLOCKUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DATABASECHANGELOGLOCKUpdateArgs<ExtArgs>>
    ): Prisma__DATABASECHANGELOGLOCKClient<$Result.GetResult<Prisma.$DATABASECHANGELOGLOCKPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DATABASECHANGELOGLOCKS.
     * @param {DATABASECHANGELOGLOCKDeleteManyArgs} args - Arguments to filter DATABASECHANGELOGLOCKS to delete.
     * @example
     * // Delete a few DATABASECHANGELOGLOCKS
     * const { count } = await prisma.dATABASECHANGELOGLOCK.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DATABASECHANGELOGLOCKDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DATABASECHANGELOGLOCKDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DATABASECHANGELOGLOCKS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DATABASECHANGELOGLOCKUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DATABASECHANGELOGLOCKS
     * const dATABASECHANGELOGLOCK = await prisma.dATABASECHANGELOGLOCK.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DATABASECHANGELOGLOCKUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DATABASECHANGELOGLOCKUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DATABASECHANGELOGLOCK.
     * @param {DATABASECHANGELOGLOCKUpsertArgs} args - Arguments to update or create a DATABASECHANGELOGLOCK.
     * @example
     * // Update or create a DATABASECHANGELOGLOCK
     * const dATABASECHANGELOGLOCK = await prisma.dATABASECHANGELOGLOCK.upsert({
     *   create: {
     *     // ... data to create a DATABASECHANGELOGLOCK
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DATABASECHANGELOGLOCK we want to update
     *   }
     * })
    **/
    upsert<T extends DATABASECHANGELOGLOCKUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DATABASECHANGELOGLOCKUpsertArgs<ExtArgs>>
    ): Prisma__DATABASECHANGELOGLOCKClient<$Result.GetResult<Prisma.$DATABASECHANGELOGLOCKPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DATABASECHANGELOGLOCKS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DATABASECHANGELOGLOCKCountArgs} args - Arguments to filter DATABASECHANGELOGLOCKS to count.
     * @example
     * // Count the number of DATABASECHANGELOGLOCKS
     * const count = await prisma.dATABASECHANGELOGLOCK.count({
     *   where: {
     *     // ... the filter for the DATABASECHANGELOGLOCKS we want to count
     *   }
     * })
    **/
    count<T extends DATABASECHANGELOGLOCKCountArgs>(
      args?: Subset<T, DATABASECHANGELOGLOCKCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DATABASECHANGELOGLOCKCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DATABASECHANGELOGLOCK.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DATABASECHANGELOGLOCKAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DATABASECHANGELOGLOCKAggregateArgs>(args: Subset<T, DATABASECHANGELOGLOCKAggregateArgs>): Prisma.PrismaPromise<GetDATABASECHANGELOGLOCKAggregateType<T>>

    /**
     * Group by DATABASECHANGELOGLOCK.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DATABASECHANGELOGLOCKGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DATABASECHANGELOGLOCKGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DATABASECHANGELOGLOCKGroupByArgs['orderBy'] }
        : { orderBy?: DATABASECHANGELOGLOCKGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DATABASECHANGELOGLOCKGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDATABASECHANGELOGLOCKGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DATABASECHANGELOGLOCK model
   */
  readonly fields: DATABASECHANGELOGLOCKFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DATABASECHANGELOGLOCK.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DATABASECHANGELOGLOCKClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DATABASECHANGELOGLOCK model
   */ 
  interface DATABASECHANGELOGLOCKFieldRefs {
    readonly ID: FieldRef<"DATABASECHANGELOGLOCK", 'Int'>
    readonly LOCKED: FieldRef<"DATABASECHANGELOGLOCK", 'Boolean'>
    readonly LOCKGRANTED: FieldRef<"DATABASECHANGELOGLOCK", 'DateTime'>
    readonly LOCKEDBY: FieldRef<"DATABASECHANGELOGLOCK", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DATABASECHANGELOGLOCK findUnique
   */
  export type DATABASECHANGELOGLOCKFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DATABASECHANGELOGLOCK
     */
    select?: DATABASECHANGELOGLOCKSelect<ExtArgs> | null
    /**
     * Filter, which DATABASECHANGELOGLOCK to fetch.
     */
    where: DATABASECHANGELOGLOCKWhereUniqueInput
  }


  /**
   * DATABASECHANGELOGLOCK findUniqueOrThrow
   */
  export type DATABASECHANGELOGLOCKFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DATABASECHANGELOGLOCK
     */
    select?: DATABASECHANGELOGLOCKSelect<ExtArgs> | null
    /**
     * Filter, which DATABASECHANGELOGLOCK to fetch.
     */
    where: DATABASECHANGELOGLOCKWhereUniqueInput
  }


  /**
   * DATABASECHANGELOGLOCK findFirst
   */
  export type DATABASECHANGELOGLOCKFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DATABASECHANGELOGLOCK
     */
    select?: DATABASECHANGELOGLOCKSelect<ExtArgs> | null
    /**
     * Filter, which DATABASECHANGELOGLOCK to fetch.
     */
    where?: DATABASECHANGELOGLOCKWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DATABASECHANGELOGLOCKS to fetch.
     */
    orderBy?: DATABASECHANGELOGLOCKOrderByWithRelationInput | DATABASECHANGELOGLOCKOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DATABASECHANGELOGLOCKS.
     */
    cursor?: DATABASECHANGELOGLOCKWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DATABASECHANGELOGLOCKS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DATABASECHANGELOGLOCKS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DATABASECHANGELOGLOCKS.
     */
    distinct?: DATABASECHANGELOGLOCKScalarFieldEnum | DATABASECHANGELOGLOCKScalarFieldEnum[]
  }


  /**
   * DATABASECHANGELOGLOCK findFirstOrThrow
   */
  export type DATABASECHANGELOGLOCKFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DATABASECHANGELOGLOCK
     */
    select?: DATABASECHANGELOGLOCKSelect<ExtArgs> | null
    /**
     * Filter, which DATABASECHANGELOGLOCK to fetch.
     */
    where?: DATABASECHANGELOGLOCKWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DATABASECHANGELOGLOCKS to fetch.
     */
    orderBy?: DATABASECHANGELOGLOCKOrderByWithRelationInput | DATABASECHANGELOGLOCKOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DATABASECHANGELOGLOCKS.
     */
    cursor?: DATABASECHANGELOGLOCKWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DATABASECHANGELOGLOCKS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DATABASECHANGELOGLOCKS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DATABASECHANGELOGLOCKS.
     */
    distinct?: DATABASECHANGELOGLOCKScalarFieldEnum | DATABASECHANGELOGLOCKScalarFieldEnum[]
  }


  /**
   * DATABASECHANGELOGLOCK findMany
   */
  export type DATABASECHANGELOGLOCKFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DATABASECHANGELOGLOCK
     */
    select?: DATABASECHANGELOGLOCKSelect<ExtArgs> | null
    /**
     * Filter, which DATABASECHANGELOGLOCKS to fetch.
     */
    where?: DATABASECHANGELOGLOCKWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DATABASECHANGELOGLOCKS to fetch.
     */
    orderBy?: DATABASECHANGELOGLOCKOrderByWithRelationInput | DATABASECHANGELOGLOCKOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DATABASECHANGELOGLOCKS.
     */
    cursor?: DATABASECHANGELOGLOCKWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DATABASECHANGELOGLOCKS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DATABASECHANGELOGLOCKS.
     */
    skip?: number
    distinct?: DATABASECHANGELOGLOCKScalarFieldEnum | DATABASECHANGELOGLOCKScalarFieldEnum[]
  }


  /**
   * DATABASECHANGELOGLOCK create
   */
  export type DATABASECHANGELOGLOCKCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DATABASECHANGELOGLOCK
     */
    select?: DATABASECHANGELOGLOCKSelect<ExtArgs> | null
    /**
     * The data needed to create a DATABASECHANGELOGLOCK.
     */
    data: XOR<DATABASECHANGELOGLOCKCreateInput, DATABASECHANGELOGLOCKUncheckedCreateInput>
  }


  /**
   * DATABASECHANGELOGLOCK createMany
   */
  export type DATABASECHANGELOGLOCKCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DATABASECHANGELOGLOCKS.
     */
    data: DATABASECHANGELOGLOCKCreateManyInput | DATABASECHANGELOGLOCKCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DATABASECHANGELOGLOCK update
   */
  export type DATABASECHANGELOGLOCKUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DATABASECHANGELOGLOCK
     */
    select?: DATABASECHANGELOGLOCKSelect<ExtArgs> | null
    /**
     * The data needed to update a DATABASECHANGELOGLOCK.
     */
    data: XOR<DATABASECHANGELOGLOCKUpdateInput, DATABASECHANGELOGLOCKUncheckedUpdateInput>
    /**
     * Choose, which DATABASECHANGELOGLOCK to update.
     */
    where: DATABASECHANGELOGLOCKWhereUniqueInput
  }


  /**
   * DATABASECHANGELOGLOCK updateMany
   */
  export type DATABASECHANGELOGLOCKUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DATABASECHANGELOGLOCKS.
     */
    data: XOR<DATABASECHANGELOGLOCKUpdateManyMutationInput, DATABASECHANGELOGLOCKUncheckedUpdateManyInput>
    /**
     * Filter which DATABASECHANGELOGLOCKS to update
     */
    where?: DATABASECHANGELOGLOCKWhereInput
  }


  /**
   * DATABASECHANGELOGLOCK upsert
   */
  export type DATABASECHANGELOGLOCKUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DATABASECHANGELOGLOCK
     */
    select?: DATABASECHANGELOGLOCKSelect<ExtArgs> | null
    /**
     * The filter to search for the DATABASECHANGELOGLOCK to update in case it exists.
     */
    where: DATABASECHANGELOGLOCKWhereUniqueInput
    /**
     * In case the DATABASECHANGELOGLOCK found by the `where` argument doesn't exist, create a new DATABASECHANGELOGLOCK with this data.
     */
    create: XOR<DATABASECHANGELOGLOCKCreateInput, DATABASECHANGELOGLOCKUncheckedCreateInput>
    /**
     * In case the DATABASECHANGELOGLOCK was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DATABASECHANGELOGLOCKUpdateInput, DATABASECHANGELOGLOCKUncheckedUpdateInput>
  }


  /**
   * DATABASECHANGELOGLOCK delete
   */
  export type DATABASECHANGELOGLOCKDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DATABASECHANGELOGLOCK
     */
    select?: DATABASECHANGELOGLOCKSelect<ExtArgs> | null
    /**
     * Filter which DATABASECHANGELOGLOCK to delete.
     */
    where: DATABASECHANGELOGLOCKWhereUniqueInput
  }


  /**
   * DATABASECHANGELOGLOCK deleteMany
   */
  export type DATABASECHANGELOGLOCKDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DATABASECHANGELOGLOCKS to delete
     */
    where?: DATABASECHANGELOGLOCKWhereInput
  }


  /**
   * DATABASECHANGELOGLOCK without action
   */
  export type DATABASECHANGELOGLOCKDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DATABASECHANGELOGLOCK
     */
    select?: DATABASECHANGELOGLOCKSelect<ExtArgs> | null
  }



  /**
   * Model SESSIONS
   */

  export type AggregateSESSIONS = {
    _count: SESSIONSCountAggregateOutputType | null
    _avg: SESSIONSAvgAggregateOutputType | null
    _sum: SESSIONSSumAggregateOutputType | null
    _min: SESSIONSMinAggregateOutputType | null
    _max: SESSIONSMaxAggregateOutputType | null
  }

  export type SESSIONSAvgAggregateOutputType = {
    UID: number | null
    USER: number | null
    rec_avail_1: number | null
    rec_travel_time_1: number | null
    rec_avail_2: number | null
    rec_travel_time_2: number | null
    rec_avail_3: number | null
    rec_travel_time_3: number | null
  }

  export type SESSIONSSumAggregateOutputType = {
    UID: number | null
    USER: number | null
    rec_avail_1: number | null
    rec_travel_time_1: number | null
    rec_avail_2: number | null
    rec_travel_time_2: number | null
    rec_avail_3: number | null
    rec_travel_time_3: number | null
  }

  export type SESSIONSMinAggregateOutputType = {
    UID: number | null
    createdAt: Date | null
    USER: number | null
    rec_garage: string | null
    rec_avail_1: number | null
    rec_travel_time_1: number | null
    rec_avail_2: number | null
    rec_travel_time_2: number | null
    rec_avail_3: number | null
    rec_travel_time_3: number | null
  }

  export type SESSIONSMaxAggregateOutputType = {
    UID: number | null
    createdAt: Date | null
    USER: number | null
    rec_garage: string | null
    rec_avail_1: number | null
    rec_travel_time_1: number | null
    rec_avail_2: number | null
    rec_travel_time_2: number | null
    rec_avail_3: number | null
    rec_travel_time_3: number | null
  }

  export type SESSIONSCountAggregateOutputType = {
    UID: number
    createdAt: number
    USER: number
    rec_garage: number
    rec_avail_1: number
    rec_travel_time_1: number
    rec_avail_2: number
    rec_travel_time_2: number
    rec_avail_3: number
    rec_travel_time_3: number
    _all: number
  }


  export type SESSIONSAvgAggregateInputType = {
    UID?: true
    USER?: true
    rec_avail_1?: true
    rec_travel_time_1?: true
    rec_avail_2?: true
    rec_travel_time_2?: true
    rec_avail_3?: true
    rec_travel_time_3?: true
  }

  export type SESSIONSSumAggregateInputType = {
    UID?: true
    USER?: true
    rec_avail_1?: true
    rec_travel_time_1?: true
    rec_avail_2?: true
    rec_travel_time_2?: true
    rec_avail_3?: true
    rec_travel_time_3?: true
  }

  export type SESSIONSMinAggregateInputType = {
    UID?: true
    createdAt?: true
    USER?: true
    rec_garage?: true
    rec_avail_1?: true
    rec_travel_time_1?: true
    rec_avail_2?: true
    rec_travel_time_2?: true
    rec_avail_3?: true
    rec_travel_time_3?: true
  }

  export type SESSIONSMaxAggregateInputType = {
    UID?: true
    createdAt?: true
    USER?: true
    rec_garage?: true
    rec_avail_1?: true
    rec_travel_time_1?: true
    rec_avail_2?: true
    rec_travel_time_2?: true
    rec_avail_3?: true
    rec_travel_time_3?: true
  }

  export type SESSIONSCountAggregateInputType = {
    UID?: true
    createdAt?: true
    USER?: true
    rec_garage?: true
    rec_avail_1?: true
    rec_travel_time_1?: true
    rec_avail_2?: true
    rec_travel_time_2?: true
    rec_avail_3?: true
    rec_travel_time_3?: true
    _all?: true
  }

  export type SESSIONSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SESSIONS to aggregate.
     */
    where?: SESSIONSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SESSIONS to fetch.
     */
    orderBy?: SESSIONSOrderByWithRelationInput | SESSIONSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SESSIONSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SESSIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SESSIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SESSIONS
    **/
    _count?: true | SESSIONSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SESSIONSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SESSIONSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SESSIONSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SESSIONSMaxAggregateInputType
  }

  export type GetSESSIONSAggregateType<T extends SESSIONSAggregateArgs> = {
        [P in keyof T & keyof AggregateSESSIONS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSESSIONS[P]>
      : GetScalarType<T[P], AggregateSESSIONS[P]>
  }




  export type SESSIONSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SESSIONSWhereInput
    orderBy?: SESSIONSOrderByWithAggregationInput | SESSIONSOrderByWithAggregationInput[]
    by: SESSIONSScalarFieldEnum[] | SESSIONSScalarFieldEnum
    having?: SESSIONSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SESSIONSCountAggregateInputType | true
    _avg?: SESSIONSAvgAggregateInputType
    _sum?: SESSIONSSumAggregateInputType
    _min?: SESSIONSMinAggregateInputType
    _max?: SESSIONSMaxAggregateInputType
  }

  export type SESSIONSGroupByOutputType = {
    UID: number
    createdAt: Date | null
    USER: number | null
    rec_garage: string | null
    rec_avail_1: number | null
    rec_travel_time_1: number | null
    rec_avail_2: number | null
    rec_travel_time_2: number | null
    rec_avail_3: number | null
    rec_travel_time_3: number | null
    _count: SESSIONSCountAggregateOutputType | null
    _avg: SESSIONSAvgAggregateOutputType | null
    _sum: SESSIONSSumAggregateOutputType | null
    _min: SESSIONSMinAggregateOutputType | null
    _max: SESSIONSMaxAggregateOutputType | null
  }

  type GetSESSIONSGroupByPayload<T extends SESSIONSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SESSIONSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SESSIONSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SESSIONSGroupByOutputType[P]>
            : GetScalarType<T[P], SESSIONSGroupByOutputType[P]>
        }
      >
    >


  export type SESSIONSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UID?: boolean
    createdAt?: boolean
    USER?: boolean
    rec_garage?: boolean
    rec_avail_1?: boolean
    rec_travel_time_1?: boolean
    rec_avail_2?: boolean
    rec_travel_time_2?: boolean
    rec_avail_3?: boolean
    rec_travel_time_3?: boolean
    USERS?: boolean | SESSIONS$USERSArgs<ExtArgs>
  }, ExtArgs["result"]["sESSIONS"]>

  export type SESSIONSSelectScalar = {
    UID?: boolean
    createdAt?: boolean
    USER?: boolean
    rec_garage?: boolean
    rec_avail_1?: boolean
    rec_travel_time_1?: boolean
    rec_avail_2?: boolean
    rec_travel_time_2?: boolean
    rec_avail_3?: boolean
    rec_travel_time_3?: boolean
  }

  export type SESSIONSInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    USERS?: boolean | SESSIONS$USERSArgs<ExtArgs>
  }


  export type $SESSIONSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SESSIONS"
    objects: {
      USERS: Prisma.$USERSPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      UID: number
      createdAt: Date | null
      USER: number | null
      rec_garage: string | null
      rec_avail_1: number | null
      rec_travel_time_1: number | null
      rec_avail_2: number | null
      rec_travel_time_2: number | null
      rec_avail_3: number | null
      rec_travel_time_3: number | null
    }, ExtArgs["result"]["sESSIONS"]>
    composites: {}
  }


  type SESSIONSGetPayload<S extends boolean | null | undefined | SESSIONSDefaultArgs> = $Result.GetResult<Prisma.$SESSIONSPayload, S>

  type SESSIONSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SESSIONSFindManyArgs, 'select' | 'include'> & {
      select?: SESSIONSCountAggregateInputType | true
    }

  export interface SESSIONSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SESSIONS'], meta: { name: 'SESSIONS' } }
    /**
     * Find zero or one SESSIONS that matches the filter.
     * @param {SESSIONSFindUniqueArgs} args - Arguments to find a SESSIONS
     * @example
     * // Get one SESSIONS
     * const sESSIONS = await prisma.sESSIONS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SESSIONSFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SESSIONSFindUniqueArgs<ExtArgs>>
    ): Prisma__SESSIONSClient<$Result.GetResult<Prisma.$SESSIONSPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SESSIONS that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SESSIONSFindUniqueOrThrowArgs} args - Arguments to find a SESSIONS
     * @example
     * // Get one SESSIONS
     * const sESSIONS = await prisma.sESSIONS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SESSIONSFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SESSIONSFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SESSIONSClient<$Result.GetResult<Prisma.$SESSIONSPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SESSIONS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SESSIONSFindFirstArgs} args - Arguments to find a SESSIONS
     * @example
     * // Get one SESSIONS
     * const sESSIONS = await prisma.sESSIONS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SESSIONSFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SESSIONSFindFirstArgs<ExtArgs>>
    ): Prisma__SESSIONSClient<$Result.GetResult<Prisma.$SESSIONSPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SESSIONS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SESSIONSFindFirstOrThrowArgs} args - Arguments to find a SESSIONS
     * @example
     * // Get one SESSIONS
     * const sESSIONS = await prisma.sESSIONS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SESSIONSFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SESSIONSFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SESSIONSClient<$Result.GetResult<Prisma.$SESSIONSPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SESSIONS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SESSIONSFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SESSIONS
     * const sESSIONS = await prisma.sESSIONS.findMany()
     * 
     * // Get first 10 SESSIONS
     * const sESSIONS = await prisma.sESSIONS.findMany({ take: 10 })
     * 
     * // Only select the `UID`
     * const sESSIONSWithUIDOnly = await prisma.sESSIONS.findMany({ select: { UID: true } })
     * 
    **/
    findMany<T extends SESSIONSFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SESSIONSFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SESSIONSPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SESSIONS.
     * @param {SESSIONSCreateArgs} args - Arguments to create a SESSIONS.
     * @example
     * // Create one SESSIONS
     * const SESSIONS = await prisma.sESSIONS.create({
     *   data: {
     *     // ... data to create a SESSIONS
     *   }
     * })
     * 
    **/
    create<T extends SESSIONSCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SESSIONSCreateArgs<ExtArgs>>
    ): Prisma__SESSIONSClient<$Result.GetResult<Prisma.$SESSIONSPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SESSIONS.
     *     @param {SESSIONSCreateManyArgs} args - Arguments to create many SESSIONS.
     *     @example
     *     // Create many SESSIONS
     *     const sESSIONS = await prisma.sESSIONS.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SESSIONSCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SESSIONSCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SESSIONS.
     * @param {SESSIONSDeleteArgs} args - Arguments to delete one SESSIONS.
     * @example
     * // Delete one SESSIONS
     * const SESSIONS = await prisma.sESSIONS.delete({
     *   where: {
     *     // ... filter to delete one SESSIONS
     *   }
     * })
     * 
    **/
    delete<T extends SESSIONSDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SESSIONSDeleteArgs<ExtArgs>>
    ): Prisma__SESSIONSClient<$Result.GetResult<Prisma.$SESSIONSPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SESSIONS.
     * @param {SESSIONSUpdateArgs} args - Arguments to update one SESSIONS.
     * @example
     * // Update one SESSIONS
     * const sESSIONS = await prisma.sESSIONS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SESSIONSUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SESSIONSUpdateArgs<ExtArgs>>
    ): Prisma__SESSIONSClient<$Result.GetResult<Prisma.$SESSIONSPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SESSIONS.
     * @param {SESSIONSDeleteManyArgs} args - Arguments to filter SESSIONS to delete.
     * @example
     * // Delete a few SESSIONS
     * const { count } = await prisma.sESSIONS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SESSIONSDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SESSIONSDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SESSIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SESSIONSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SESSIONS
     * const sESSIONS = await prisma.sESSIONS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SESSIONSUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SESSIONSUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SESSIONS.
     * @param {SESSIONSUpsertArgs} args - Arguments to update or create a SESSIONS.
     * @example
     * // Update or create a SESSIONS
     * const sESSIONS = await prisma.sESSIONS.upsert({
     *   create: {
     *     // ... data to create a SESSIONS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SESSIONS we want to update
     *   }
     * })
    **/
    upsert<T extends SESSIONSUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SESSIONSUpsertArgs<ExtArgs>>
    ): Prisma__SESSIONSClient<$Result.GetResult<Prisma.$SESSIONSPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SESSIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SESSIONSCountArgs} args - Arguments to filter SESSIONS to count.
     * @example
     * // Count the number of SESSIONS
     * const count = await prisma.sESSIONS.count({
     *   where: {
     *     // ... the filter for the SESSIONS we want to count
     *   }
     * })
    **/
    count<T extends SESSIONSCountArgs>(
      args?: Subset<T, SESSIONSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SESSIONSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SESSIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SESSIONSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SESSIONSAggregateArgs>(args: Subset<T, SESSIONSAggregateArgs>): Prisma.PrismaPromise<GetSESSIONSAggregateType<T>>

    /**
     * Group by SESSIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SESSIONSGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SESSIONSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SESSIONSGroupByArgs['orderBy'] }
        : { orderBy?: SESSIONSGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SESSIONSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSESSIONSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SESSIONS model
   */
  readonly fields: SESSIONSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SESSIONS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SESSIONSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    USERS<T extends SESSIONS$USERSArgs<ExtArgs> = {}>(args?: Subset<T, SESSIONS$USERSArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SESSIONS model
   */ 
  interface SESSIONSFieldRefs {
    readonly UID: FieldRef<"SESSIONS", 'Int'>
    readonly createdAt: FieldRef<"SESSIONS", 'DateTime'>
    readonly USER: FieldRef<"SESSIONS", 'Int'>
    readonly rec_garage: FieldRef<"SESSIONS", 'String'>
    readonly rec_avail_1: FieldRef<"SESSIONS", 'Int'>
    readonly rec_travel_time_1: FieldRef<"SESSIONS", 'Int'>
    readonly rec_avail_2: FieldRef<"SESSIONS", 'Int'>
    readonly rec_travel_time_2: FieldRef<"SESSIONS", 'Int'>
    readonly rec_avail_3: FieldRef<"SESSIONS", 'Int'>
    readonly rec_travel_time_3: FieldRef<"SESSIONS", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * SESSIONS findUnique
   */
  export type SESSIONSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SESSIONS
     */
    select?: SESSIONSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SESSIONSInclude<ExtArgs> | null
    /**
     * Filter, which SESSIONS to fetch.
     */
    where: SESSIONSWhereUniqueInput
  }


  /**
   * SESSIONS findUniqueOrThrow
   */
  export type SESSIONSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SESSIONS
     */
    select?: SESSIONSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SESSIONSInclude<ExtArgs> | null
    /**
     * Filter, which SESSIONS to fetch.
     */
    where: SESSIONSWhereUniqueInput
  }


  /**
   * SESSIONS findFirst
   */
  export type SESSIONSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SESSIONS
     */
    select?: SESSIONSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SESSIONSInclude<ExtArgs> | null
    /**
     * Filter, which SESSIONS to fetch.
     */
    where?: SESSIONSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SESSIONS to fetch.
     */
    orderBy?: SESSIONSOrderByWithRelationInput | SESSIONSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SESSIONS.
     */
    cursor?: SESSIONSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SESSIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SESSIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SESSIONS.
     */
    distinct?: SESSIONSScalarFieldEnum | SESSIONSScalarFieldEnum[]
  }


  /**
   * SESSIONS findFirstOrThrow
   */
  export type SESSIONSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SESSIONS
     */
    select?: SESSIONSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SESSIONSInclude<ExtArgs> | null
    /**
     * Filter, which SESSIONS to fetch.
     */
    where?: SESSIONSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SESSIONS to fetch.
     */
    orderBy?: SESSIONSOrderByWithRelationInput | SESSIONSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SESSIONS.
     */
    cursor?: SESSIONSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SESSIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SESSIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SESSIONS.
     */
    distinct?: SESSIONSScalarFieldEnum | SESSIONSScalarFieldEnum[]
  }


  /**
   * SESSIONS findMany
   */
  export type SESSIONSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SESSIONS
     */
    select?: SESSIONSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SESSIONSInclude<ExtArgs> | null
    /**
     * Filter, which SESSIONS to fetch.
     */
    where?: SESSIONSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SESSIONS to fetch.
     */
    orderBy?: SESSIONSOrderByWithRelationInput | SESSIONSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SESSIONS.
     */
    cursor?: SESSIONSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SESSIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SESSIONS.
     */
    skip?: number
    distinct?: SESSIONSScalarFieldEnum | SESSIONSScalarFieldEnum[]
  }


  /**
   * SESSIONS create
   */
  export type SESSIONSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SESSIONS
     */
    select?: SESSIONSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SESSIONSInclude<ExtArgs> | null
    /**
     * The data needed to create a SESSIONS.
     */
    data?: XOR<SESSIONSCreateInput, SESSIONSUncheckedCreateInput>
  }


  /**
   * SESSIONS createMany
   */
  export type SESSIONSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SESSIONS.
     */
    data: SESSIONSCreateManyInput | SESSIONSCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SESSIONS update
   */
  export type SESSIONSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SESSIONS
     */
    select?: SESSIONSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SESSIONSInclude<ExtArgs> | null
    /**
     * The data needed to update a SESSIONS.
     */
    data: XOR<SESSIONSUpdateInput, SESSIONSUncheckedUpdateInput>
    /**
     * Choose, which SESSIONS to update.
     */
    where: SESSIONSWhereUniqueInput
  }


  /**
   * SESSIONS updateMany
   */
  export type SESSIONSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SESSIONS.
     */
    data: XOR<SESSIONSUpdateManyMutationInput, SESSIONSUncheckedUpdateManyInput>
    /**
     * Filter which SESSIONS to update
     */
    where?: SESSIONSWhereInput
  }


  /**
   * SESSIONS upsert
   */
  export type SESSIONSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SESSIONS
     */
    select?: SESSIONSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SESSIONSInclude<ExtArgs> | null
    /**
     * The filter to search for the SESSIONS to update in case it exists.
     */
    where: SESSIONSWhereUniqueInput
    /**
     * In case the SESSIONS found by the `where` argument doesn't exist, create a new SESSIONS with this data.
     */
    create: XOR<SESSIONSCreateInput, SESSIONSUncheckedCreateInput>
    /**
     * In case the SESSIONS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SESSIONSUpdateInput, SESSIONSUncheckedUpdateInput>
  }


  /**
   * SESSIONS delete
   */
  export type SESSIONSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SESSIONS
     */
    select?: SESSIONSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SESSIONSInclude<ExtArgs> | null
    /**
     * Filter which SESSIONS to delete.
     */
    where: SESSIONSWhereUniqueInput
  }


  /**
   * SESSIONS deleteMany
   */
  export type SESSIONSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SESSIONS to delete
     */
    where?: SESSIONSWhereInput
  }


  /**
   * SESSIONS.USERS
   */
  export type SESSIONS$USERSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERSInclude<ExtArgs> | null
    where?: USERSWhereInput
  }


  /**
   * SESSIONS without action
   */
  export type SESSIONSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SESSIONS
     */
    select?: SESSIONSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SESSIONSInclude<ExtArgs> | null
  }



  /**
   * Model USERS
   */

  export type AggregateUSERS = {
    _count: USERSCountAggregateOutputType | null
    _avg: USERSAvgAggregateOutputType | null
    _sum: USERSSumAggregateOutputType | null
    _min: USERSMinAggregateOutputType | null
    _max: USERSMaxAggregateOutputType | null
  }

  export type USERSAvgAggregateOutputType = {
    UID: number | null
  }

  export type USERSSumAggregateOutputType = {
    UID: number | null
  }

  export type USERSMinAggregateOutputType = {
    UID: number | null
    createdAt: Date | null
    name: string | null
    username: string | null
    password: string | null
    parking_pass_type: string | null
    address: string | null
    bio: string | null
  }

  export type USERSMaxAggregateOutputType = {
    UID: number | null
    createdAt: Date | null
    name: string | null
    username: string | null
    password: string | null
    parking_pass_type: string | null
    address: string | null
    bio: string | null
  }

  export type USERSCountAggregateOutputType = {
    UID: number
    createdAt: number
    name: number
    username: number
    password: number
    parking_pass_type: number
    address: number
    bio: number
    _all: number
  }


  export type USERSAvgAggregateInputType = {
    UID?: true
  }

  export type USERSSumAggregateInputType = {
    UID?: true
  }

  export type USERSMinAggregateInputType = {
    UID?: true
    createdAt?: true
    name?: true
    username?: true
    password?: true
    parking_pass_type?: true
    address?: true
    bio?: true
  }

  export type USERSMaxAggregateInputType = {
    UID?: true
    createdAt?: true
    name?: true
    username?: true
    password?: true
    parking_pass_type?: true
    address?: true
    bio?: true
  }

  export type USERSCountAggregateInputType = {
    UID?: true
    createdAt?: true
    name?: true
    username?: true
    password?: true
    parking_pass_type?: true
    address?: true
    bio?: true
    _all?: true
  }

  export type USERSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USERS to aggregate.
     */
    where?: USERSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USERSOrderByWithRelationInput | USERSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: USERSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned USERS
    **/
    _count?: true | USERSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: USERSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: USERSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: USERSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: USERSMaxAggregateInputType
  }

  export type GetUSERSAggregateType<T extends USERSAggregateArgs> = {
        [P in keyof T & keyof AggregateUSERS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUSERS[P]>
      : GetScalarType<T[P], AggregateUSERS[P]>
  }




  export type USERSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: USERSWhereInput
    orderBy?: USERSOrderByWithAggregationInput | USERSOrderByWithAggregationInput[]
    by: USERSScalarFieldEnum[] | USERSScalarFieldEnum
    having?: USERSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: USERSCountAggregateInputType | true
    _avg?: USERSAvgAggregateInputType
    _sum?: USERSSumAggregateInputType
    _min?: USERSMinAggregateInputType
    _max?: USERSMaxAggregateInputType
  }

  export type USERSGroupByOutputType = {
    UID: number
    createdAt: Date | null
    name: string | null
    username: string | null
    password: string | null
    parking_pass_type: string | null
    address: string | null
    bio: string | null
    _count: USERSCountAggregateOutputType | null
    _avg: USERSAvgAggregateOutputType | null
    _sum: USERSSumAggregateOutputType | null
    _min: USERSMinAggregateOutputType | null
    _max: USERSMaxAggregateOutputType | null
  }

  type GetUSERSGroupByPayload<T extends USERSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<USERSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof USERSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], USERSGroupByOutputType[P]>
            : GetScalarType<T[P], USERSGroupByOutputType[P]>
        }
      >
    >


  export type USERSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UID?: boolean
    createdAt?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    parking_pass_type?: boolean
    address?: boolean
    bio?: boolean
    SESSIONS?: boolean | USERS$SESSIONSArgs<ExtArgs>
    _count?: boolean | USERSCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uSERS"]>

  export type USERSSelectScalar = {
    UID?: boolean
    createdAt?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    parking_pass_type?: boolean
    address?: boolean
    bio?: boolean
  }

  export type USERSInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SESSIONS?: boolean | USERS$SESSIONSArgs<ExtArgs>
    _count?: boolean | USERSCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $USERSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "USERS"
    objects: {
      SESSIONS: Prisma.$SESSIONSPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      UID: number
      createdAt: Date | null
      name: string | null
      username: string | null
      password: string | null
      parking_pass_type: string | null
      address: string | null
      bio: string | null
    }, ExtArgs["result"]["uSERS"]>
    composites: {}
  }


  type USERSGetPayload<S extends boolean | null | undefined | USERSDefaultArgs> = $Result.GetResult<Prisma.$USERSPayload, S>

  type USERSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<USERSFindManyArgs, 'select' | 'include'> & {
      select?: USERSCountAggregateInputType | true
    }

  export interface USERSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['USERS'], meta: { name: 'USERS' } }
    /**
     * Find zero or one USERS that matches the filter.
     * @param {USERSFindUniqueArgs} args - Arguments to find a USERS
     * @example
     * // Get one USERS
     * const uSERS = await prisma.uSERS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends USERSFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, USERSFindUniqueArgs<ExtArgs>>
    ): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one USERS that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {USERSFindUniqueOrThrowArgs} args - Arguments to find a USERS
     * @example
     * // Get one USERS
     * const uSERS = await prisma.uSERS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends USERSFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, USERSFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first USERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSFindFirstArgs} args - Arguments to find a USERS
     * @example
     * // Get one USERS
     * const uSERS = await prisma.uSERS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends USERSFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, USERSFindFirstArgs<ExtArgs>>
    ): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first USERS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSFindFirstOrThrowArgs} args - Arguments to find a USERS
     * @example
     * // Get one USERS
     * const uSERS = await prisma.uSERS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends USERSFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, USERSFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more USERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all USERS
     * const uSERS = await prisma.uSERS.findMany()
     * 
     * // Get first 10 USERS
     * const uSERS = await prisma.uSERS.findMany({ take: 10 })
     * 
     * // Only select the `UID`
     * const uSERSWithUIDOnly = await prisma.uSERS.findMany({ select: { UID: true } })
     * 
    **/
    findMany<T extends USERSFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, USERSFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a USERS.
     * @param {USERSCreateArgs} args - Arguments to create a USERS.
     * @example
     * // Create one USERS
     * const USERS = await prisma.uSERS.create({
     *   data: {
     *     // ... data to create a USERS
     *   }
     * })
     * 
    **/
    create<T extends USERSCreateArgs<ExtArgs>>(
      args: SelectSubset<T, USERSCreateArgs<ExtArgs>>
    ): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many USERS.
     *     @param {USERSCreateManyArgs} args - Arguments to create many USERS.
     *     @example
     *     // Create many USERS
     *     const uSERS = await prisma.uSERS.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends USERSCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, USERSCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a USERS.
     * @param {USERSDeleteArgs} args - Arguments to delete one USERS.
     * @example
     * // Delete one USERS
     * const USERS = await prisma.uSERS.delete({
     *   where: {
     *     // ... filter to delete one USERS
     *   }
     * })
     * 
    **/
    delete<T extends USERSDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, USERSDeleteArgs<ExtArgs>>
    ): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one USERS.
     * @param {USERSUpdateArgs} args - Arguments to update one USERS.
     * @example
     * // Update one USERS
     * const uSERS = await prisma.uSERS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends USERSUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, USERSUpdateArgs<ExtArgs>>
    ): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more USERS.
     * @param {USERSDeleteManyArgs} args - Arguments to filter USERS to delete.
     * @example
     * // Delete a few USERS
     * const { count } = await prisma.uSERS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends USERSDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, USERSDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many USERS
     * const uSERS = await prisma.uSERS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends USERSUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, USERSUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one USERS.
     * @param {USERSUpsertArgs} args - Arguments to update or create a USERS.
     * @example
     * // Update or create a USERS
     * const uSERS = await prisma.uSERS.upsert({
     *   create: {
     *     // ... data to create a USERS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the USERS we want to update
     *   }
     * })
    **/
    upsert<T extends USERSUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, USERSUpsertArgs<ExtArgs>>
    ): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSCountArgs} args - Arguments to filter USERS to count.
     * @example
     * // Count the number of USERS
     * const count = await prisma.uSERS.count({
     *   where: {
     *     // ... the filter for the USERS we want to count
     *   }
     * })
    **/
    count<T extends USERSCountArgs>(
      args?: Subset<T, USERSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], USERSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends USERSAggregateArgs>(args: Subset<T, USERSAggregateArgs>): Prisma.PrismaPromise<GetUSERSAggregateType<T>>

    /**
     * Group by USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends USERSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: USERSGroupByArgs['orderBy'] }
        : { orderBy?: USERSGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, USERSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUSERSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the USERS model
   */
  readonly fields: USERSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for USERS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__USERSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    SESSIONS<T extends USERS$SESSIONSArgs<ExtArgs> = {}>(args?: Subset<T, USERS$SESSIONSArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SESSIONSPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the USERS model
   */ 
  interface USERSFieldRefs {
    readonly UID: FieldRef<"USERS", 'Int'>
    readonly createdAt: FieldRef<"USERS", 'DateTime'>
    readonly name: FieldRef<"USERS", 'String'>
    readonly username: FieldRef<"USERS", 'String'>
    readonly password: FieldRef<"USERS", 'String'>
    readonly parking_pass_type: FieldRef<"USERS", 'String'>
    readonly address: FieldRef<"USERS", 'String'>
    readonly bio: FieldRef<"USERS", 'String'>
  }
    

  // Custom InputTypes

  /**
   * USERS findUnique
   */
  export type USERSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERSInclude<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where: USERSWhereUniqueInput
  }


  /**
   * USERS findUniqueOrThrow
   */
  export type USERSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERSInclude<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where: USERSWhereUniqueInput
  }


  /**
   * USERS findFirst
   */
  export type USERSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERSInclude<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where?: USERSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USERSOrderByWithRelationInput | USERSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USERS.
     */
    cursor?: USERSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USERS.
     */
    distinct?: USERSScalarFieldEnum | USERSScalarFieldEnum[]
  }


  /**
   * USERS findFirstOrThrow
   */
  export type USERSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERSInclude<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where?: USERSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USERSOrderByWithRelationInput | USERSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USERS.
     */
    cursor?: USERSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USERS.
     */
    distinct?: USERSScalarFieldEnum | USERSScalarFieldEnum[]
  }


  /**
   * USERS findMany
   */
  export type USERSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERSInclude<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where?: USERSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USERSOrderByWithRelationInput | USERSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing USERS.
     */
    cursor?: USERSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    distinct?: USERSScalarFieldEnum | USERSScalarFieldEnum[]
  }


  /**
   * USERS create
   */
  export type USERSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERSInclude<ExtArgs> | null
    /**
     * The data needed to create a USERS.
     */
    data?: XOR<USERSCreateInput, USERSUncheckedCreateInput>
  }


  /**
   * USERS createMany
   */
  export type USERSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many USERS.
     */
    data: USERSCreateManyInput | USERSCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * USERS update
   */
  export type USERSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERSInclude<ExtArgs> | null
    /**
     * The data needed to update a USERS.
     */
    data: XOR<USERSUpdateInput, USERSUncheckedUpdateInput>
    /**
     * Choose, which USERS to update.
     */
    where: USERSWhereUniqueInput
  }


  /**
   * USERS updateMany
   */
  export type USERSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update USERS.
     */
    data: XOR<USERSUpdateManyMutationInput, USERSUncheckedUpdateManyInput>
    /**
     * Filter which USERS to update
     */
    where?: USERSWhereInput
  }


  /**
   * USERS upsert
   */
  export type USERSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERSInclude<ExtArgs> | null
    /**
     * The filter to search for the USERS to update in case it exists.
     */
    where: USERSWhereUniqueInput
    /**
     * In case the USERS found by the `where` argument doesn't exist, create a new USERS with this data.
     */
    create: XOR<USERSCreateInput, USERSUncheckedCreateInput>
    /**
     * In case the USERS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<USERSUpdateInput, USERSUncheckedUpdateInput>
  }


  /**
   * USERS delete
   */
  export type USERSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERSInclude<ExtArgs> | null
    /**
     * Filter which USERS to delete.
     */
    where: USERSWhereUniqueInput
  }


  /**
   * USERS deleteMany
   */
  export type USERSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USERS to delete
     */
    where?: USERSWhereInput
  }


  /**
   * USERS.SESSIONS
   */
  export type USERS$SESSIONSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SESSIONS
     */
    select?: SESSIONSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SESSIONSInclude<ExtArgs> | null
    where?: SESSIONSWhereInput
    orderBy?: SESSIONSOrderByWithRelationInput | SESSIONSOrderByWithRelationInput[]
    cursor?: SESSIONSWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SESSIONSScalarFieldEnum | SESSIONSScalarFieldEnum[]
  }


  /**
   * USERS without action
   */
  export type USERSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERSInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DATABASECHANGELOGLOCKScalarFieldEnum: {
    ID: 'ID',
    LOCKED: 'LOCKED',
    LOCKGRANTED: 'LOCKGRANTED',
    LOCKEDBY: 'LOCKEDBY'
  };

  export type DATABASECHANGELOGLOCKScalarFieldEnum = (typeof DATABASECHANGELOGLOCKScalarFieldEnum)[keyof typeof DATABASECHANGELOGLOCKScalarFieldEnum]


  export const SESSIONSScalarFieldEnum: {
    UID: 'UID',
    createdAt: 'createdAt',
    USER: 'USER',
    rec_garage: 'rec_garage',
    rec_avail_1: 'rec_avail_1',
    rec_travel_time_1: 'rec_travel_time_1',
    rec_avail_2: 'rec_avail_2',
    rec_travel_time_2: 'rec_travel_time_2',
    rec_avail_3: 'rec_avail_3',
    rec_travel_time_3: 'rec_travel_time_3'
  };

  export type SESSIONSScalarFieldEnum = (typeof SESSIONSScalarFieldEnum)[keyof typeof SESSIONSScalarFieldEnum]


  export const USERSScalarFieldEnum: {
    UID: 'UID',
    createdAt: 'createdAt',
    name: 'name',
    username: 'username',
    password: 'password',
    parking_pass_type: 'parking_pass_type',
    address: 'address',
    bio: 'bio'
  };

  export type USERSScalarFieldEnum = (typeof USERSScalarFieldEnum)[keyof typeof USERSScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DATABASECHANGELOGLOCKWhereInput = {
    AND?: DATABASECHANGELOGLOCKWhereInput | DATABASECHANGELOGLOCKWhereInput[]
    OR?: DATABASECHANGELOGLOCKWhereInput[]
    NOT?: DATABASECHANGELOGLOCKWhereInput | DATABASECHANGELOGLOCKWhereInput[]
    ID?: IntFilter<"DATABASECHANGELOGLOCK"> | number
    LOCKED?: BoolFilter<"DATABASECHANGELOGLOCK"> | boolean
    LOCKGRANTED?: DateTimeNullableFilter<"DATABASECHANGELOGLOCK"> | Date | string | null
    LOCKEDBY?: StringNullableFilter<"DATABASECHANGELOGLOCK"> | string | null
  }

  export type DATABASECHANGELOGLOCKOrderByWithRelationInput = {
    ID?: SortOrder
    LOCKED?: SortOrder
    LOCKGRANTED?: SortOrderInput | SortOrder
    LOCKEDBY?: SortOrderInput | SortOrder
  }

  export type DATABASECHANGELOGLOCKWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: DATABASECHANGELOGLOCKWhereInput | DATABASECHANGELOGLOCKWhereInput[]
    OR?: DATABASECHANGELOGLOCKWhereInput[]
    NOT?: DATABASECHANGELOGLOCKWhereInput | DATABASECHANGELOGLOCKWhereInput[]
    LOCKED?: BoolFilter<"DATABASECHANGELOGLOCK"> | boolean
    LOCKGRANTED?: DateTimeNullableFilter<"DATABASECHANGELOGLOCK"> | Date | string | null
    LOCKEDBY?: StringNullableFilter<"DATABASECHANGELOGLOCK"> | string | null
  }, "ID">

  export type DATABASECHANGELOGLOCKOrderByWithAggregationInput = {
    ID?: SortOrder
    LOCKED?: SortOrder
    LOCKGRANTED?: SortOrderInput | SortOrder
    LOCKEDBY?: SortOrderInput | SortOrder
    _count?: DATABASECHANGELOGLOCKCountOrderByAggregateInput
    _avg?: DATABASECHANGELOGLOCKAvgOrderByAggregateInput
    _max?: DATABASECHANGELOGLOCKMaxOrderByAggregateInput
    _min?: DATABASECHANGELOGLOCKMinOrderByAggregateInput
    _sum?: DATABASECHANGELOGLOCKSumOrderByAggregateInput
  }

  export type DATABASECHANGELOGLOCKScalarWhereWithAggregatesInput = {
    AND?: DATABASECHANGELOGLOCKScalarWhereWithAggregatesInput | DATABASECHANGELOGLOCKScalarWhereWithAggregatesInput[]
    OR?: DATABASECHANGELOGLOCKScalarWhereWithAggregatesInput[]
    NOT?: DATABASECHANGELOGLOCKScalarWhereWithAggregatesInput | DATABASECHANGELOGLOCKScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"DATABASECHANGELOGLOCK"> | number
    LOCKED?: BoolWithAggregatesFilter<"DATABASECHANGELOGLOCK"> | boolean
    LOCKGRANTED?: DateTimeNullableWithAggregatesFilter<"DATABASECHANGELOGLOCK"> | Date | string | null
    LOCKEDBY?: StringNullableWithAggregatesFilter<"DATABASECHANGELOGLOCK"> | string | null
  }

  export type SESSIONSWhereInput = {
    AND?: SESSIONSWhereInput | SESSIONSWhereInput[]
    OR?: SESSIONSWhereInput[]
    NOT?: SESSIONSWhereInput | SESSIONSWhereInput[]
    UID?: IntFilter<"SESSIONS"> | number
    createdAt?: DateTimeNullableFilter<"SESSIONS"> | Date | string | null
    USER?: IntNullableFilter<"SESSIONS"> | number | null
    rec_garage?: StringNullableFilter<"SESSIONS"> | string | null
    rec_avail_1?: IntNullableFilter<"SESSIONS"> | number | null
    rec_travel_time_1?: IntNullableFilter<"SESSIONS"> | number | null
    rec_avail_2?: IntNullableFilter<"SESSIONS"> | number | null
    rec_travel_time_2?: IntNullableFilter<"SESSIONS"> | number | null
    rec_avail_3?: IntNullableFilter<"SESSIONS"> | number | null
    rec_travel_time_3?: IntNullableFilter<"SESSIONS"> | number | null
    USERS?: XOR<USERSNullableRelationFilter, USERSWhereInput> | null
  }

  export type SESSIONSOrderByWithRelationInput = {
    UID?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    USER?: SortOrderInput | SortOrder
    rec_garage?: SortOrderInput | SortOrder
    rec_avail_1?: SortOrderInput | SortOrder
    rec_travel_time_1?: SortOrderInput | SortOrder
    rec_avail_2?: SortOrderInput | SortOrder
    rec_travel_time_2?: SortOrderInput | SortOrder
    rec_avail_3?: SortOrderInput | SortOrder
    rec_travel_time_3?: SortOrderInput | SortOrder
    USERS?: USERSOrderByWithRelationInput
  }

  export type SESSIONSWhereUniqueInput = Prisma.AtLeast<{
    UID?: number
    AND?: SESSIONSWhereInput | SESSIONSWhereInput[]
    OR?: SESSIONSWhereInput[]
    NOT?: SESSIONSWhereInput | SESSIONSWhereInput[]
    createdAt?: DateTimeNullableFilter<"SESSIONS"> | Date | string | null
    USER?: IntNullableFilter<"SESSIONS"> | number | null
    rec_garage?: StringNullableFilter<"SESSIONS"> | string | null
    rec_avail_1?: IntNullableFilter<"SESSIONS"> | number | null
    rec_travel_time_1?: IntNullableFilter<"SESSIONS"> | number | null
    rec_avail_2?: IntNullableFilter<"SESSIONS"> | number | null
    rec_travel_time_2?: IntNullableFilter<"SESSIONS"> | number | null
    rec_avail_3?: IntNullableFilter<"SESSIONS"> | number | null
    rec_travel_time_3?: IntNullableFilter<"SESSIONS"> | number | null
    USERS?: XOR<USERSNullableRelationFilter, USERSWhereInput> | null
  }, "UID">

  export type SESSIONSOrderByWithAggregationInput = {
    UID?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    USER?: SortOrderInput | SortOrder
    rec_garage?: SortOrderInput | SortOrder
    rec_avail_1?: SortOrderInput | SortOrder
    rec_travel_time_1?: SortOrderInput | SortOrder
    rec_avail_2?: SortOrderInput | SortOrder
    rec_travel_time_2?: SortOrderInput | SortOrder
    rec_avail_3?: SortOrderInput | SortOrder
    rec_travel_time_3?: SortOrderInput | SortOrder
    _count?: SESSIONSCountOrderByAggregateInput
    _avg?: SESSIONSAvgOrderByAggregateInput
    _max?: SESSIONSMaxOrderByAggregateInput
    _min?: SESSIONSMinOrderByAggregateInput
    _sum?: SESSIONSSumOrderByAggregateInput
  }

  export type SESSIONSScalarWhereWithAggregatesInput = {
    AND?: SESSIONSScalarWhereWithAggregatesInput | SESSIONSScalarWhereWithAggregatesInput[]
    OR?: SESSIONSScalarWhereWithAggregatesInput[]
    NOT?: SESSIONSScalarWhereWithAggregatesInput | SESSIONSScalarWhereWithAggregatesInput[]
    UID?: IntWithAggregatesFilter<"SESSIONS"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"SESSIONS"> | Date | string | null
    USER?: IntNullableWithAggregatesFilter<"SESSIONS"> | number | null
    rec_garage?: StringNullableWithAggregatesFilter<"SESSIONS"> | string | null
    rec_avail_1?: IntNullableWithAggregatesFilter<"SESSIONS"> | number | null
    rec_travel_time_1?: IntNullableWithAggregatesFilter<"SESSIONS"> | number | null
    rec_avail_2?: IntNullableWithAggregatesFilter<"SESSIONS"> | number | null
    rec_travel_time_2?: IntNullableWithAggregatesFilter<"SESSIONS"> | number | null
    rec_avail_3?: IntNullableWithAggregatesFilter<"SESSIONS"> | number | null
    rec_travel_time_3?: IntNullableWithAggregatesFilter<"SESSIONS"> | number | null
  }

  export type USERSWhereInput = {
    AND?: USERSWhereInput | USERSWhereInput[]
    OR?: USERSWhereInput[]
    NOT?: USERSWhereInput | USERSWhereInput[]
    UID?: IntFilter<"USERS"> | number
    createdAt?: DateTimeNullableFilter<"USERS"> | Date | string | null
    name?: StringNullableFilter<"USERS"> | string | null
    username?: StringNullableFilter<"USERS"> | string | null
    password?: StringNullableFilter<"USERS"> | string | null
    parking_pass_type?: StringNullableFilter<"USERS"> | string | null
    address?: StringNullableFilter<"USERS"> | string | null
    bio?: StringNullableFilter<"USERS"> | string | null
    SESSIONS?: SESSIONSListRelationFilter
  }

  export type USERSOrderByWithRelationInput = {
    UID?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    parking_pass_type?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    SESSIONS?: SESSIONSOrderByRelationAggregateInput
  }

  export type USERSWhereUniqueInput = Prisma.AtLeast<{
    UID?: number
    AND?: USERSWhereInput | USERSWhereInput[]
    OR?: USERSWhereInput[]
    NOT?: USERSWhereInput | USERSWhereInput[]
    createdAt?: DateTimeNullableFilter<"USERS"> | Date | string | null
    name?: StringNullableFilter<"USERS"> | string | null
    username?: StringNullableFilter<"USERS"> | string | null
    password?: StringNullableFilter<"USERS"> | string | null
    parking_pass_type?: StringNullableFilter<"USERS"> | string | null
    address?: StringNullableFilter<"USERS"> | string | null
    bio?: StringNullableFilter<"USERS"> | string | null
    SESSIONS?: SESSIONSListRelationFilter
  }, "UID">

  export type USERSOrderByWithAggregationInput = {
    UID?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    parking_pass_type?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    _count?: USERSCountOrderByAggregateInput
    _avg?: USERSAvgOrderByAggregateInput
    _max?: USERSMaxOrderByAggregateInput
    _min?: USERSMinOrderByAggregateInput
    _sum?: USERSSumOrderByAggregateInput
  }

  export type USERSScalarWhereWithAggregatesInput = {
    AND?: USERSScalarWhereWithAggregatesInput | USERSScalarWhereWithAggregatesInput[]
    OR?: USERSScalarWhereWithAggregatesInput[]
    NOT?: USERSScalarWhereWithAggregatesInput | USERSScalarWhereWithAggregatesInput[]
    UID?: IntWithAggregatesFilter<"USERS"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"USERS"> | Date | string | null
    name?: StringNullableWithAggregatesFilter<"USERS"> | string | null
    username?: StringNullableWithAggregatesFilter<"USERS"> | string | null
    password?: StringNullableWithAggregatesFilter<"USERS"> | string | null
    parking_pass_type?: StringNullableWithAggregatesFilter<"USERS"> | string | null
    address?: StringNullableWithAggregatesFilter<"USERS"> | string | null
    bio?: StringNullableWithAggregatesFilter<"USERS"> | string | null
  }

  export type DATABASECHANGELOGLOCKCreateInput = {
    ID: number
    LOCKED: boolean
    LOCKGRANTED?: Date | string | null
    LOCKEDBY?: string | null
  }

  export type DATABASECHANGELOGLOCKUncheckedCreateInput = {
    ID: number
    LOCKED: boolean
    LOCKGRANTED?: Date | string | null
    LOCKEDBY?: string | null
  }

  export type DATABASECHANGELOGLOCKUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    LOCKED?: BoolFieldUpdateOperationsInput | boolean
    LOCKGRANTED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LOCKEDBY?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DATABASECHANGELOGLOCKUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    LOCKED?: BoolFieldUpdateOperationsInput | boolean
    LOCKGRANTED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LOCKEDBY?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DATABASECHANGELOGLOCKCreateManyInput = {
    ID: number
    LOCKED: boolean
    LOCKGRANTED?: Date | string | null
    LOCKEDBY?: string | null
  }

  export type DATABASECHANGELOGLOCKUpdateManyMutationInput = {
    ID?: IntFieldUpdateOperationsInput | number
    LOCKED?: BoolFieldUpdateOperationsInput | boolean
    LOCKGRANTED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LOCKEDBY?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DATABASECHANGELOGLOCKUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    LOCKED?: BoolFieldUpdateOperationsInput | boolean
    LOCKGRANTED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LOCKEDBY?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SESSIONSCreateInput = {
    createdAt?: Date | string | null
    rec_garage?: string | null
    rec_avail_1?: number | null
    rec_travel_time_1?: number | null
    rec_avail_2?: number | null
    rec_travel_time_2?: number | null
    rec_avail_3?: number | null
    rec_travel_time_3?: number | null
    USERS?: USERSCreateNestedOneWithoutSESSIONSInput
  }

  export type SESSIONSUncheckedCreateInput = {
    UID?: number
    createdAt?: Date | string | null
    USER?: number | null
    rec_garage?: string | null
    rec_avail_1?: number | null
    rec_travel_time_1?: number | null
    rec_avail_2?: number | null
    rec_travel_time_2?: number | null
    rec_avail_3?: number | null
    rec_travel_time_3?: number | null
  }

  export type SESSIONSUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rec_garage?: NullableStringFieldUpdateOperationsInput | string | null
    rec_avail_1?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_1?: NullableIntFieldUpdateOperationsInput | number | null
    rec_avail_2?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_2?: NullableIntFieldUpdateOperationsInput | number | null
    rec_avail_3?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_3?: NullableIntFieldUpdateOperationsInput | number | null
    USERS?: USERSUpdateOneWithoutSESSIONSNestedInput
  }

  export type SESSIONSUncheckedUpdateInput = {
    UID?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    USER?: NullableIntFieldUpdateOperationsInput | number | null
    rec_garage?: NullableStringFieldUpdateOperationsInput | string | null
    rec_avail_1?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_1?: NullableIntFieldUpdateOperationsInput | number | null
    rec_avail_2?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_2?: NullableIntFieldUpdateOperationsInput | number | null
    rec_avail_3?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_3?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SESSIONSCreateManyInput = {
    UID?: number
    createdAt?: Date | string | null
    USER?: number | null
    rec_garage?: string | null
    rec_avail_1?: number | null
    rec_travel_time_1?: number | null
    rec_avail_2?: number | null
    rec_travel_time_2?: number | null
    rec_avail_3?: number | null
    rec_travel_time_3?: number | null
  }

  export type SESSIONSUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rec_garage?: NullableStringFieldUpdateOperationsInput | string | null
    rec_avail_1?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_1?: NullableIntFieldUpdateOperationsInput | number | null
    rec_avail_2?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_2?: NullableIntFieldUpdateOperationsInput | number | null
    rec_avail_3?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_3?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SESSIONSUncheckedUpdateManyInput = {
    UID?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    USER?: NullableIntFieldUpdateOperationsInput | number | null
    rec_garage?: NullableStringFieldUpdateOperationsInput | string | null
    rec_avail_1?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_1?: NullableIntFieldUpdateOperationsInput | number | null
    rec_avail_2?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_2?: NullableIntFieldUpdateOperationsInput | number | null
    rec_avail_3?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_3?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type USERSCreateInput = {
    createdAt?: Date | string | null
    name?: string | null
    username?: string | null
    password?: string | null
    parking_pass_type?: string | null
    address?: string | null
    bio?: string | null
    SESSIONS?: SESSIONSCreateNestedManyWithoutUSERSInput
  }

  export type USERSUncheckedCreateInput = {
    UID?: number
    createdAt?: Date | string | null
    name?: string | null
    username?: string | null
    password?: string | null
    parking_pass_type?: string | null
    address?: string | null
    bio?: string | null
    SESSIONS?: SESSIONSUncheckedCreateNestedManyWithoutUSERSInput
  }

  export type USERSUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parking_pass_type?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    SESSIONS?: SESSIONSUpdateManyWithoutUSERSNestedInput
  }

  export type USERSUncheckedUpdateInput = {
    UID?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parking_pass_type?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    SESSIONS?: SESSIONSUncheckedUpdateManyWithoutUSERSNestedInput
  }

  export type USERSCreateManyInput = {
    UID?: number
    createdAt?: Date | string | null
    name?: string | null
    username?: string | null
    password?: string | null
    parking_pass_type?: string | null
    address?: string | null
    bio?: string | null
  }

  export type USERSUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parking_pass_type?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type USERSUncheckedUpdateManyInput = {
    UID?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parking_pass_type?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DATABASECHANGELOGLOCKCountOrderByAggregateInput = {
    ID?: SortOrder
    LOCKED?: SortOrder
    LOCKGRANTED?: SortOrder
    LOCKEDBY?: SortOrder
  }

  export type DATABASECHANGELOGLOCKAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type DATABASECHANGELOGLOCKMaxOrderByAggregateInput = {
    ID?: SortOrder
    LOCKED?: SortOrder
    LOCKGRANTED?: SortOrder
    LOCKEDBY?: SortOrder
  }

  export type DATABASECHANGELOGLOCKMinOrderByAggregateInput = {
    ID?: SortOrder
    LOCKED?: SortOrder
    LOCKGRANTED?: SortOrder
    LOCKEDBY?: SortOrder
  }

  export type DATABASECHANGELOGLOCKSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type USERSNullableRelationFilter = {
    is?: USERSWhereInput | null
    isNot?: USERSWhereInput | null
  }

  export type SESSIONSCountOrderByAggregateInput = {
    UID?: SortOrder
    createdAt?: SortOrder
    USER?: SortOrder
    rec_garage?: SortOrder
    rec_avail_1?: SortOrder
    rec_travel_time_1?: SortOrder
    rec_avail_2?: SortOrder
    rec_travel_time_2?: SortOrder
    rec_avail_3?: SortOrder
    rec_travel_time_3?: SortOrder
  }

  export type SESSIONSAvgOrderByAggregateInput = {
    UID?: SortOrder
    USER?: SortOrder
    rec_avail_1?: SortOrder
    rec_travel_time_1?: SortOrder
    rec_avail_2?: SortOrder
    rec_travel_time_2?: SortOrder
    rec_avail_3?: SortOrder
    rec_travel_time_3?: SortOrder
  }

  export type SESSIONSMaxOrderByAggregateInput = {
    UID?: SortOrder
    createdAt?: SortOrder
    USER?: SortOrder
    rec_garage?: SortOrder
    rec_avail_1?: SortOrder
    rec_travel_time_1?: SortOrder
    rec_avail_2?: SortOrder
    rec_travel_time_2?: SortOrder
    rec_avail_3?: SortOrder
    rec_travel_time_3?: SortOrder
  }

  export type SESSIONSMinOrderByAggregateInput = {
    UID?: SortOrder
    createdAt?: SortOrder
    USER?: SortOrder
    rec_garage?: SortOrder
    rec_avail_1?: SortOrder
    rec_travel_time_1?: SortOrder
    rec_avail_2?: SortOrder
    rec_travel_time_2?: SortOrder
    rec_avail_3?: SortOrder
    rec_travel_time_3?: SortOrder
  }

  export type SESSIONSSumOrderByAggregateInput = {
    UID?: SortOrder
    USER?: SortOrder
    rec_avail_1?: SortOrder
    rec_travel_time_1?: SortOrder
    rec_avail_2?: SortOrder
    rec_travel_time_2?: SortOrder
    rec_avail_3?: SortOrder
    rec_travel_time_3?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SESSIONSListRelationFilter = {
    every?: SESSIONSWhereInput
    some?: SESSIONSWhereInput
    none?: SESSIONSWhereInput
  }

  export type SESSIONSOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type USERSCountOrderByAggregateInput = {
    UID?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    parking_pass_type?: SortOrder
    address?: SortOrder
    bio?: SortOrder
  }

  export type USERSAvgOrderByAggregateInput = {
    UID?: SortOrder
  }

  export type USERSMaxOrderByAggregateInput = {
    UID?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    parking_pass_type?: SortOrder
    address?: SortOrder
    bio?: SortOrder
  }

  export type USERSMinOrderByAggregateInput = {
    UID?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    parking_pass_type?: SortOrder
    address?: SortOrder
    bio?: SortOrder
  }

  export type USERSSumOrderByAggregateInput = {
    UID?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type USERSCreateNestedOneWithoutSESSIONSInput = {
    create?: XOR<USERSCreateWithoutSESSIONSInput, USERSUncheckedCreateWithoutSESSIONSInput>
    connectOrCreate?: USERSCreateOrConnectWithoutSESSIONSInput
    connect?: USERSWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type USERSUpdateOneWithoutSESSIONSNestedInput = {
    create?: XOR<USERSCreateWithoutSESSIONSInput, USERSUncheckedCreateWithoutSESSIONSInput>
    connectOrCreate?: USERSCreateOrConnectWithoutSESSIONSInput
    upsert?: USERSUpsertWithoutSESSIONSInput
    disconnect?: USERSWhereInput | boolean
    delete?: USERSWhereInput | boolean
    connect?: USERSWhereUniqueInput
    update?: XOR<XOR<USERSUpdateToOneWithWhereWithoutSESSIONSInput, USERSUpdateWithoutSESSIONSInput>, USERSUncheckedUpdateWithoutSESSIONSInput>
  }

  export type SESSIONSCreateNestedManyWithoutUSERSInput = {
    create?: XOR<SESSIONSCreateWithoutUSERSInput, SESSIONSUncheckedCreateWithoutUSERSInput> | SESSIONSCreateWithoutUSERSInput[] | SESSIONSUncheckedCreateWithoutUSERSInput[]
    connectOrCreate?: SESSIONSCreateOrConnectWithoutUSERSInput | SESSIONSCreateOrConnectWithoutUSERSInput[]
    createMany?: SESSIONSCreateManyUSERSInputEnvelope
    connect?: SESSIONSWhereUniqueInput | SESSIONSWhereUniqueInput[]
  }

  export type SESSIONSUncheckedCreateNestedManyWithoutUSERSInput = {
    create?: XOR<SESSIONSCreateWithoutUSERSInput, SESSIONSUncheckedCreateWithoutUSERSInput> | SESSIONSCreateWithoutUSERSInput[] | SESSIONSUncheckedCreateWithoutUSERSInput[]
    connectOrCreate?: SESSIONSCreateOrConnectWithoutUSERSInput | SESSIONSCreateOrConnectWithoutUSERSInput[]
    createMany?: SESSIONSCreateManyUSERSInputEnvelope
    connect?: SESSIONSWhereUniqueInput | SESSIONSWhereUniqueInput[]
  }

  export type SESSIONSUpdateManyWithoutUSERSNestedInput = {
    create?: XOR<SESSIONSCreateWithoutUSERSInput, SESSIONSUncheckedCreateWithoutUSERSInput> | SESSIONSCreateWithoutUSERSInput[] | SESSIONSUncheckedCreateWithoutUSERSInput[]
    connectOrCreate?: SESSIONSCreateOrConnectWithoutUSERSInput | SESSIONSCreateOrConnectWithoutUSERSInput[]
    upsert?: SESSIONSUpsertWithWhereUniqueWithoutUSERSInput | SESSIONSUpsertWithWhereUniqueWithoutUSERSInput[]
    createMany?: SESSIONSCreateManyUSERSInputEnvelope
    set?: SESSIONSWhereUniqueInput | SESSIONSWhereUniqueInput[]
    disconnect?: SESSIONSWhereUniqueInput | SESSIONSWhereUniqueInput[]
    delete?: SESSIONSWhereUniqueInput | SESSIONSWhereUniqueInput[]
    connect?: SESSIONSWhereUniqueInput | SESSIONSWhereUniqueInput[]
    update?: SESSIONSUpdateWithWhereUniqueWithoutUSERSInput | SESSIONSUpdateWithWhereUniqueWithoutUSERSInput[]
    updateMany?: SESSIONSUpdateManyWithWhereWithoutUSERSInput | SESSIONSUpdateManyWithWhereWithoutUSERSInput[]
    deleteMany?: SESSIONSScalarWhereInput | SESSIONSScalarWhereInput[]
  }

  export type SESSIONSUncheckedUpdateManyWithoutUSERSNestedInput = {
    create?: XOR<SESSIONSCreateWithoutUSERSInput, SESSIONSUncheckedCreateWithoutUSERSInput> | SESSIONSCreateWithoutUSERSInput[] | SESSIONSUncheckedCreateWithoutUSERSInput[]
    connectOrCreate?: SESSIONSCreateOrConnectWithoutUSERSInput | SESSIONSCreateOrConnectWithoutUSERSInput[]
    upsert?: SESSIONSUpsertWithWhereUniqueWithoutUSERSInput | SESSIONSUpsertWithWhereUniqueWithoutUSERSInput[]
    createMany?: SESSIONSCreateManyUSERSInputEnvelope
    set?: SESSIONSWhereUniqueInput | SESSIONSWhereUniqueInput[]
    disconnect?: SESSIONSWhereUniqueInput | SESSIONSWhereUniqueInput[]
    delete?: SESSIONSWhereUniqueInput | SESSIONSWhereUniqueInput[]
    connect?: SESSIONSWhereUniqueInput | SESSIONSWhereUniqueInput[]
    update?: SESSIONSUpdateWithWhereUniqueWithoutUSERSInput | SESSIONSUpdateWithWhereUniqueWithoutUSERSInput[]
    updateMany?: SESSIONSUpdateManyWithWhereWithoutUSERSInput | SESSIONSUpdateManyWithWhereWithoutUSERSInput[]
    deleteMany?: SESSIONSScalarWhereInput | SESSIONSScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type USERSCreateWithoutSESSIONSInput = {
    createdAt?: Date | string | null
    name?: string | null
    username?: string | null
    password?: string | null
    parking_pass_type?: string | null
    address?: string | null
    bio?: string | null
  }

  export type USERSUncheckedCreateWithoutSESSIONSInput = {
    UID?: number
    createdAt?: Date | string | null
    name?: string | null
    username?: string | null
    password?: string | null
    parking_pass_type?: string | null
    address?: string | null
    bio?: string | null
  }

  export type USERSCreateOrConnectWithoutSESSIONSInput = {
    where: USERSWhereUniqueInput
    create: XOR<USERSCreateWithoutSESSIONSInput, USERSUncheckedCreateWithoutSESSIONSInput>
  }

  export type USERSUpsertWithoutSESSIONSInput = {
    update: XOR<USERSUpdateWithoutSESSIONSInput, USERSUncheckedUpdateWithoutSESSIONSInput>
    create: XOR<USERSCreateWithoutSESSIONSInput, USERSUncheckedCreateWithoutSESSIONSInput>
    where?: USERSWhereInput
  }

  export type USERSUpdateToOneWithWhereWithoutSESSIONSInput = {
    where?: USERSWhereInput
    data: XOR<USERSUpdateWithoutSESSIONSInput, USERSUncheckedUpdateWithoutSESSIONSInput>
  }

  export type USERSUpdateWithoutSESSIONSInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parking_pass_type?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type USERSUncheckedUpdateWithoutSESSIONSInput = {
    UID?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parking_pass_type?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SESSIONSCreateWithoutUSERSInput = {
    createdAt?: Date | string | null
    rec_garage?: string | null
    rec_avail_1?: number | null
    rec_travel_time_1?: number | null
    rec_avail_2?: number | null
    rec_travel_time_2?: number | null
    rec_avail_3?: number | null
    rec_travel_time_3?: number | null
  }

  export type SESSIONSUncheckedCreateWithoutUSERSInput = {
    UID?: number
    createdAt?: Date | string | null
    rec_garage?: string | null
    rec_avail_1?: number | null
    rec_travel_time_1?: number | null
    rec_avail_2?: number | null
    rec_travel_time_2?: number | null
    rec_avail_3?: number | null
    rec_travel_time_3?: number | null
  }

  export type SESSIONSCreateOrConnectWithoutUSERSInput = {
    where: SESSIONSWhereUniqueInput
    create: XOR<SESSIONSCreateWithoutUSERSInput, SESSIONSUncheckedCreateWithoutUSERSInput>
  }

  export type SESSIONSCreateManyUSERSInputEnvelope = {
    data: SESSIONSCreateManyUSERSInput | SESSIONSCreateManyUSERSInput[]
    skipDuplicates?: boolean
  }

  export type SESSIONSUpsertWithWhereUniqueWithoutUSERSInput = {
    where: SESSIONSWhereUniqueInput
    update: XOR<SESSIONSUpdateWithoutUSERSInput, SESSIONSUncheckedUpdateWithoutUSERSInput>
    create: XOR<SESSIONSCreateWithoutUSERSInput, SESSIONSUncheckedCreateWithoutUSERSInput>
  }

  export type SESSIONSUpdateWithWhereUniqueWithoutUSERSInput = {
    where: SESSIONSWhereUniqueInput
    data: XOR<SESSIONSUpdateWithoutUSERSInput, SESSIONSUncheckedUpdateWithoutUSERSInput>
  }

  export type SESSIONSUpdateManyWithWhereWithoutUSERSInput = {
    where: SESSIONSScalarWhereInput
    data: XOR<SESSIONSUpdateManyMutationInput, SESSIONSUncheckedUpdateManyWithoutUSERSInput>
  }

  export type SESSIONSScalarWhereInput = {
    AND?: SESSIONSScalarWhereInput | SESSIONSScalarWhereInput[]
    OR?: SESSIONSScalarWhereInput[]
    NOT?: SESSIONSScalarWhereInput | SESSIONSScalarWhereInput[]
    UID?: IntFilter<"SESSIONS"> | number
    createdAt?: DateTimeNullableFilter<"SESSIONS"> | Date | string | null
    USER?: IntNullableFilter<"SESSIONS"> | number | null
    rec_garage?: StringNullableFilter<"SESSIONS"> | string | null
    rec_avail_1?: IntNullableFilter<"SESSIONS"> | number | null
    rec_travel_time_1?: IntNullableFilter<"SESSIONS"> | number | null
    rec_avail_2?: IntNullableFilter<"SESSIONS"> | number | null
    rec_travel_time_2?: IntNullableFilter<"SESSIONS"> | number | null
    rec_avail_3?: IntNullableFilter<"SESSIONS"> | number | null
    rec_travel_time_3?: IntNullableFilter<"SESSIONS"> | number | null
  }

  export type SESSIONSCreateManyUSERSInput = {
    UID?: number
    createdAt?: Date | string | null
    rec_garage?: string | null
    rec_avail_1?: number | null
    rec_travel_time_1?: number | null
    rec_avail_2?: number | null
    rec_travel_time_2?: number | null
    rec_avail_3?: number | null
    rec_travel_time_3?: number | null
  }

  export type SESSIONSUpdateWithoutUSERSInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rec_garage?: NullableStringFieldUpdateOperationsInput | string | null
    rec_avail_1?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_1?: NullableIntFieldUpdateOperationsInput | number | null
    rec_avail_2?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_2?: NullableIntFieldUpdateOperationsInput | number | null
    rec_avail_3?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_3?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SESSIONSUncheckedUpdateWithoutUSERSInput = {
    UID?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rec_garage?: NullableStringFieldUpdateOperationsInput | string | null
    rec_avail_1?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_1?: NullableIntFieldUpdateOperationsInput | number | null
    rec_avail_2?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_2?: NullableIntFieldUpdateOperationsInput | number | null
    rec_avail_3?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_3?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SESSIONSUncheckedUpdateManyWithoutUSERSInput = {
    UID?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rec_garage?: NullableStringFieldUpdateOperationsInput | string | null
    rec_avail_1?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_1?: NullableIntFieldUpdateOperationsInput | number | null
    rec_avail_2?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_2?: NullableIntFieldUpdateOperationsInput | number | null
    rec_avail_3?: NullableIntFieldUpdateOperationsInput | number | null
    rec_travel_time_3?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use USERSCountOutputTypeDefaultArgs instead
     */
    export type USERSCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = USERSCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DATABASECHANGELOGLOCKDefaultArgs instead
     */
    export type DATABASECHANGELOGLOCKArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DATABASECHANGELOGLOCKDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SESSIONSDefaultArgs instead
     */
    export type SESSIONSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SESSIONSDefaultArgs<ExtArgs>
    /**
     * @deprecated Use USERSDefaultArgs instead
     */
    export type USERSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = USERSDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}