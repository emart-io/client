/**
 * @fileoverview gRPC-Web generated client stub for zbay
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var user_pb = require('./user_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.zbay = require('./address_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zbay.AddressesClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zbay.AddressesPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Address,
 *   !proto.zbay.Address>}
 */
const methodInfo_Addresses_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Address,
  /** @param {!proto.zbay.Address} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Address.deserializeBinary
);


/**
 * @param {!proto.zbay.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Address)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Address>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.AddressesClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Addresses/Add',
      request,
      metadata || {},
      methodInfo_Addresses_Add,
      callback);
};


/**
 * @param {!proto.zbay.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Address>}
 *     A native promise that resolves to the response
 */
proto.zbay.AddressesPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Addresses/Add',
      request,
      metadata || {},
      methodInfo_Addresses_Add);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Address,
 *   !proto.zbay.Address>}
 */
const methodInfo_Addresses_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Address,
  /** @param {!proto.zbay.Address} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Address.deserializeBinary
);


/**
 * @param {!proto.zbay.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Address)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Address>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.AddressesClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Addresses/Get',
      request,
      metadata || {},
      methodInfo_Addresses_Get,
      callback);
};


/**
 * @param {!proto.zbay.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Address>}
 *     A native promise that resolves to the response
 */
proto.zbay.AddressesPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Addresses/Get',
      request,
      metadata || {},
      methodInfo_Addresses_Get);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Address,
 *   !proto.zbay.Address>}
 */
const methodInfo_Addresses_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Address,
  /** @param {!proto.zbay.Address} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Address.deserializeBinary
);


/**
 * @param {!proto.zbay.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Address)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Address>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.AddressesClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Addresses/Update',
      request,
      metadata || {},
      methodInfo_Addresses_Update,
      callback);
};


/**
 * @param {!proto.zbay.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Address>}
 *     A native promise that resolves to the response
 */
proto.zbay.AddressesPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Addresses/Update',
      request,
      metadata || {},
      methodInfo_Addresses_Update);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Address,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Addresses_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.zbay.Address} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.zbay.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.AddressesClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Addresses/Delete',
      request,
      metadata || {},
      methodInfo_Addresses_Delete,
      callback);
};


/**
 * @param {!proto.zbay.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.zbay.AddressesPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Addresses/Delete',
      request,
      metadata || {},
      methodInfo_Addresses_Delete);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.User,
 *   !proto.zbay.Address>}
 */
const methodInfo_Addresses_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Address,
  /** @param {!proto.zbay.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Address.deserializeBinary
);


/**
 * @param {!proto.zbay.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Address>}
 *     The XHR Node Readable Stream
 */
proto.zbay.AddressesClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zbay.Addresses/List',
      request,
      metadata || {},
      methodInfo_Addresses_List);
};


/**
 * @param {!proto.zbay.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Address>}
 *     The XHR Node Readable Stream
 */
proto.zbay.AddressesPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zbay.Addresses/List',
      request,
      metadata || {},
      methodInfo_Addresses_List);
};


module.exports = proto.zbay;
