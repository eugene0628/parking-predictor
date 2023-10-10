
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.4.2
 * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
 */
Prisma.prismaVersion = {
  client: "5.4.2",
  engine: "ac9d7041ed77bcc8a8dbd2ab6616b39013829574"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.DATABASECHANGELOGLOCKScalarFieldEnum = {
  ID: 'ID',
  LOCKED: 'LOCKED',
  LOCKGRANTED: 'LOCKGRANTED',
  LOCKEDBY: 'LOCKEDBY'
};

exports.Prisma.USERSScalarFieldEnum = {
  UID: 'UID',
  name: 'name',
  username: 'username',
  password: 'password',
  parking_pass_type: 'parking_pass_type',
  address: 'address',
  bio: 'bio',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  DATABASECHANGELOGLOCK: 'DATABASECHANGELOGLOCK',
  USERS: 'USERS'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/joshmarcelin/Stuff/school/capstone/project/parking-predictor/persistence/prisma/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.4.2",
  "engineVersion": "ac9d7041ed77bcc8a8dbd2ab6616b39013829574",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gIm15c3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9CgovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lgptb2RlbCBEQVRBQkFTRUNIQU5HRUxPRyB7CiAgSUQgICAgICAgICAgICBTdHJpbmcgICBAZGIuVmFyQ2hhcigyNTUpCiAgQVVUSE9SICAgICAgICBTdHJpbmcgICBAZGIuVmFyQ2hhcigyNTUpCiAgRklMRU5BTUUgICAgICBTdHJpbmcgICBAZGIuVmFyQ2hhcigyNTUpCiAgREFURUVYRUNVVEVEICBEYXRlVGltZSBAZGIuRGF0ZVRpbWUoMCkKICBPUkRFUkVYRUNVVEVEIEludAogIEVYRUNUWVBFICAgICAgU3RyaW5nICAgQGRiLlZhckNoYXIoMTApCiAgTUQ1U1VNICAgICAgICBTdHJpbmc/ICBAZGIuVmFyQ2hhcigzNSkKICBERVNDUklQVElPTiAgIFN0cmluZz8gIEBkYi5WYXJDaGFyKDI1NSkKICBDT01NRU5UUyAgICAgIFN0cmluZz8gIEBkYi5WYXJDaGFyKDI1NSkKICBUQUcgICAgICAgICAgIFN0cmluZz8gIEBkYi5WYXJDaGFyKDI1NSkKICBMSVFVSUJBU0UgICAgIFN0cmluZz8gIEBkYi5WYXJDaGFyKDIwKQogIENPTlRFWFRTICAgICAgU3RyaW5nPyAgQGRiLlZhckNoYXIoMjU1KQogIExBQkVMUyAgICAgICAgU3RyaW5nPyAgQGRiLlZhckNoYXIoMjU1KQogIERFUExPWU1FTlRfSUQgU3RyaW5nPyAgQGRiLlZhckNoYXIoMTApCgogIEBAaWdub3JlCn0KCm1vZGVsIERBVEFCQVNFQ0hBTkdFTE9HTE9DSyB7CiAgSUQgICAgICAgICAgSW50ICAgICAgIEBpZAogIExPQ0tFRCAgICAgIEJvb2xlYW4gICBAZGIuQml0KDEpCiAgTE9DS0dSQU5URUQgRGF0ZVRpbWU/IEBkYi5EYXRlVGltZSgwKQogIExPQ0tFREJZICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCn0KCi8vLyBUaGUgdW5kZXJseWluZyB0YWJsZSBkb2VzIG5vdCBjb250YWluIGEgdmFsaWQgdW5pcXVlIGlkZW50aWZpZXIgYW5kIGNhbiB0aGVyZWZvcmUgY3VycmVudGx5IG5vdCBiZSBoYW5kbGVkIGJ5IFByaXNtYSBDbGllbnQuCm1vZGVsIFNFU1NJT05TIHsKICBjcmVhdGVkQXQgICAgICAgICBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQogIFVTRVIgICAgICAgICAgICAgIEludD8KICByZWNfZ2FyYWdlICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIHJlY19hdmFpbF8xICAgICAgIEludD8KICByZWNfdHJhdmVsX3RpbWVfMSBJbnQ/CiAgcmVjX2F2YWlsXzIgICAgICAgSW50PwogIHJlY190cmF2ZWxfdGltZV8yIEludD8KICByZWNfYXZhaWxfMyAgICAgICBJbnQ/CiAgcmVjX3RyYXZlbF90aW1lXzMgSW50PwogIFVTRVJTICAgICAgICAgICAgIFVTRVJTPyAgICBAcmVsYXRpb24oZmllbGRzOiBbVVNFUl0sIHJlZmVyZW5jZXM6IFtVSURdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiZmtfVVNFUiIpCgogIEBAaW5kZXgoW1VTRVJdLCBtYXA6ICJma19VU0VSIikKICBAQGlnbm9yZQp9Cgptb2RlbCBVU0VSUyB7CiAgVUlEICAgICAgICAgICAgICAgSW50ICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5hbWUgICAgICAgICAgICAgIFN0cmluZz8gICAgQGRiLlZhckNoYXIoMjU1KQogIHVzZXJuYW1lICAgICAgICAgIFN0cmluZz8gICAgQGRiLlZhckNoYXIoMjU1KQogIHBhc3N3b3JkICAgICAgICAgIFN0cmluZz8gICAgQGRiLlZhckNoYXIoMjU1KQogIHBhcmtpbmdfcGFzc190eXBlIFN0cmluZz8gICAgQGRiLlZhckNoYXIoMjU1KQogIGFkZHJlc3MgICAgICAgICAgIFN0cmluZz8gICAgQGRiLlZhckNoYXIoMjU1KQogIGJpbyAgICAgICAgICAgICAgIFN0cmluZz8gICAgQGRiLlRleHQKICBjcmVhdGVkQXQgICAgICAgICBEYXRlVGltZSAgIEBkZWZhdWx0KG5vdygpKQogIFNFU1NJT05TICAgICAgICAgIFNFU1NJT05TW10gQGlnbm9yZQp9Cg==",
  "inlineSchemaHash": "0d11347288cd355683095f5e50641010226da4e60944557f1591a8223f16a8df",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"DATABASECHANGELOGLOCK\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LOCKED\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LOCKGRANTED\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LOCKEDBY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"USERS\":{\"dbName\":null,\"fields\":[{\"name\":\"UID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_pass_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

