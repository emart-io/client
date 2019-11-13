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
proto.zbay = require('./coupon_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zbay.CouponsClient =
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
proto.zbay.CouponsPromiseClient =
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
 *   !proto.zbay.Coupon,
 *   !proto.zbay.Coupon>}
 */
const methodInfo_Coupons_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Coupon,
  /** @param {!proto.zbay.Coupon} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Coupon.deserializeBinary
);


/**
 * @param {!proto.zbay.Coupon} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Coupon)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Coupon>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.CouponsClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Coupons/Add',
      request,
      metadata || {},
      methodInfo_Coupons_Add,
      callback);
};


/**
 * @param {!proto.zbay.Coupon} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Coupon>}
 *     A native promise that resolves to the response
 */
proto.zbay.CouponsPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Coupons/Add',
      request,
      metadata || {},
      methodInfo_Coupons_Add);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Coupon,
 *   !proto.zbay.Coupon>}
 */
const methodInfo_Coupons_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Coupon,
  /** @param {!proto.zbay.Coupon} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Coupon.deserializeBinary
);


/**
 * @param {!proto.zbay.Coupon} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Coupon)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Coupon>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.CouponsClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Coupons/Get',
      request,
      metadata || {},
      methodInfo_Coupons_Get,
      callback);
};


/**
 * @param {!proto.zbay.Coupon} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Coupon>}
 *     A native promise that resolves to the response
 */
proto.zbay.CouponsPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Coupons/Get',
      request,
      metadata || {},
      methodInfo_Coupons_Get);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Coupon,
 *   !proto.zbay.Coupon>}
 */
const methodInfo_Coupons_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Coupon,
  /** @param {!proto.zbay.Coupon} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Coupon.deserializeBinary
);


/**
 * @param {!proto.zbay.Coupon} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zbay.Coupon)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Coupon>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.CouponsClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Coupons/Update',
      request,
      metadata || {},
      methodInfo_Coupons_Update,
      callback);
};


/**
 * @param {!proto.zbay.Coupon} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zbay.Coupon>}
 *     A native promise that resolves to the response
 */
proto.zbay.CouponsPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Coupons/Update',
      request,
      metadata || {},
      methodInfo_Coupons_Update);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.Coupon,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Coupons_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.zbay.Coupon} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.zbay.Coupon} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zbay.CouponsClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zbay.Coupons/Delete',
      request,
      metadata || {},
      methodInfo_Coupons_Delete,
      callback);
};


/**
 * @param {!proto.zbay.Coupon} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.zbay.CouponsPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zbay.Coupons/Delete',
      request,
      metadata || {},
      methodInfo_Coupons_Delete);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zbay.User,
 *   !proto.zbay.Coupon>}
 */
const methodInfo_Coupons_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zbay.Coupon,
  /** @param {!proto.zbay.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.zbay.Coupon.deserializeBinary
);


/**
 * @param {!proto.zbay.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Coupon>}
 *     The XHR Node Readable Stream
 */
proto.zbay.CouponsClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zbay.Coupons/List',
      request,
      metadata || {},
      methodInfo_Coupons_List);
};


/**
 * @param {!proto.zbay.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zbay.Coupon>}
 *     The XHR Node Readable Stream
 */
proto.zbay.CouponsPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zbay.Coupons/List',
      request,
      metadata || {},
      methodInfo_Coupons_List);
};


module.exports = proto.zbay;
