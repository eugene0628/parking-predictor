
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
      modelProps: 'dATABASECHANGELOGLOCK' | 'uSERS'
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
    name: string | null
    username: string | null
    password: string | null
    parking_pass_type: string | null
    address: string | null
    bio: string | null
    createdAt: Date | null
  }

  export type USERSMaxAggregateOutputType = {
    UID: number | null
    name: string | null
    username: string | null
    password: string | null
    parking_pass_type: string | null
    address: string | null
    bio: string | null
    createdAt: Date | null
  }

  export type USERSCountAggregateOutputType = {
    UID: number
    name: number
    username: number
    password: number
    parking_pass_type: number
    address: number
    bio: number
    createdAt: number
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
    name?: true
    username?: true
    password?: true
    parking_pass_type?: true
    address?: true
    bio?: true
    createdAt?: true
  }

  export type USERSMaxAggregateInputType = {
    UID?: true
    name?: true
    username?: true
    password?: true
    parking_pass_type?: true
    address?: true
    bio?: true
    createdAt?: true
  }

  export type USERSCountAggregateInputType = {
    UID?: true
    name?: true
    username?: true
    password?: true
    parking_pass_type?: true
    address?: true
    bio?: true
    createdAt?: true
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
    name: string | null
    username: string | null
    password: string | null
    parking_pass_type: string | null
    address: string | null
    bio: string | null
    createdAt: Date
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
    name?: boolean
    username?: boolean
    password?: boolean
    parking_pass_type?: boolean
    address?: boolean
    bio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["uSERS"]>

  export type USERSSelectScalar = {
    UID?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    parking_pass_type?: boolean
    address?: boolean
    bio?: boolean
    createdAt?: boolean
  }


  export type $USERSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "USERS"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      UID: number
      name: string | null
      username: string | null
      password: string | null
      parking_pass_type: string | null
      address: string | null
      bio: string | null
      createdAt: Date
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
    readonly name: FieldRef<"USERS", 'String'>
    readonly username: FieldRef<"USERS", 'String'>
    readonly password: FieldRef<"USERS", 'String'>
    readonly parking_pass_type: FieldRef<"USERS", 'String'>
    readonly address: FieldRef<"USERS", 'String'>
    readonly bio: FieldRef<"USERS", 'String'>
    readonly createdAt: FieldRef<"USERS", 'DateTime'>
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
   * USERS without action
   */
  export type USERSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
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


  export const USERSScalarFieldEnum: {
    UID: 'UID',
    name: 'name',
    username: 'username',
    password: 'password',
    parking_pass_type: 'parking_pass_type',
    address: 'address',
    bio: 'bio',
    createdAt: 'createdAt'
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

  export type USERSWhereInput = {
    AND?: USERSWhereInput | USERSWhereInput[]
    OR?: USERSWhereInput[]
    NOT?: USERSWhereInput | USERSWhereInput[]
    UID?: IntFilter<"USERS"> | number
    name?: StringNullableFilter<"USERS"> | string | null
    username?: StringNullableFilter<"USERS"> | string | null
    password?: StringNullableFilter<"USERS"> | string | null
    parking_pass_type?: StringNullableFilter<"USERS"> | string | null
    address?: StringNullableFilter<"USERS"> | string | null
    bio?: StringNullableFilter<"USERS"> | string | null
    createdAt?: DateTimeFilter<"USERS"> | Date | string
  }

  export type USERSOrderByWithRelationInput = {
    UID?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    parking_pass_type?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type USERSWhereUniqueInput = Prisma.AtLeast<{
    UID?: number
    AND?: USERSWhereInput | USERSWhereInput[]
    OR?: USERSWhereInput[]
    NOT?: USERSWhereInput | USERSWhereInput[]
    name?: StringNullableFilter<"USERS"> | string | null
    username?: StringNullableFilter<"USERS"> | string | null
    password?: StringNullableFilter<"USERS"> | string | null
    parking_pass_type?: StringNullableFilter<"USERS"> | string | null
    address?: StringNullableFilter<"USERS"> | string | null
    bio?: StringNullableFilter<"USERS"> | string | null
    createdAt?: DateTimeFilter<"USERS"> | Date | string
  }, "UID">

  export type USERSOrderByWithAggregationInput = {
    UID?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    parking_pass_type?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
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
    name?: StringNullableWithAggregatesFilter<"USERS"> | string | null
    username?: StringNullableWithAggregatesFilter<"USERS"> | string | null
    password?: StringNullableWithAggregatesFilter<"USERS"> | string | null
    parking_pass_type?: StringNullableWithAggregatesFilter<"USERS"> | string | null
    address?: StringNullableWithAggregatesFilter<"USERS"> | string | null
    bio?: StringNullableWithAggregatesFilter<"USERS"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"USERS"> | Date | string
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

  export type USERSCreateInput = {
    name?: string | null
    username?: string | null
    password?: string | null
    parking_pass_type?: string | null
    address?: string | null
    bio?: string | null
    createdAt?: Date | string
  }

  export type USERSUncheckedCreateInput = {
    UID?: number
    name?: string | null
    username?: string | null
    password?: string | null
    parking_pass_type?: string | null
    address?: string | null
    bio?: string | null
    createdAt?: Date | string
  }

  export type USERSUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parking_pass_type?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type USERSUncheckedUpdateInput = {
    UID?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parking_pass_type?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type USERSCreateManyInput = {
    UID?: number
    name?: string | null
    username?: string | null
    password?: string | null
    parking_pass_type?: string | null
    address?: string | null
    bio?: string | null
    createdAt?: Date | string
  }

  export type USERSUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parking_pass_type?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type USERSUncheckedUpdateManyInput = {
    UID?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parking_pass_type?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type USERSCountOrderByAggregateInput = {
    UID?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    parking_pass_type?: SortOrder
    address?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
  }

  export type USERSAvgOrderByAggregateInput = {
    UID?: SortOrder
  }

  export type USERSMaxOrderByAggregateInput = {
    UID?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    parking_pass_type?: SortOrder
    address?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
  }

  export type USERSMinOrderByAggregateInput = {
    UID?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    parking_pass_type?: SortOrder
    address?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
  }

  export type USERSSumOrderByAggregateInput = {
    UID?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DATABASECHANGELOGLOCKDefaultArgs instead
     */
    export type DATABASECHANGELOGLOCKArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DATABASECHANGELOGLOCKDefaultArgs<ExtArgs>
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