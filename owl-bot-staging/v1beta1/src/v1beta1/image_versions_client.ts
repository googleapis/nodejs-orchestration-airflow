// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

/* global window */
import * as gax from 'google-gax';
import {Callback, CallOptions, Descriptors, ClientOptions, PaginationCallback, GaxCall} from 'google-gax';

import { Transform } from 'stream';
import { RequestType } from 'google-gax/build/src/apitypes';
import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1beta1/image_versions_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './image_versions_client_config.json';

const version = require('../../../package.json').version;

/**
 *  Readonly service to query available ImageVersions.
 * @class
 * @memberof v1beta1
 */
export class ImageVersionsClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  imageVersionsStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of ImageVersionsClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean} [options.fallback] - Use HTTP fallback mode.
   *     In fallback mode, a special browser-compatible transport implementation is used
   *     instead of gRPC transport. In browser context (if the `window` object is defined)
   *     the fallback mode is enabled automatically; set `options.fallback` to `false`
   *     if you need to override this behavior.
   */
  constructor(opts?: ClientOptions) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof ImageVersionsClient;
    const servicePath = opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(opts?.servicePath || opts?.apiEndpoint);
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback = opts?.fallback ?? (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = (this._gaxGrpc.auth as gax.GoogleAuth);

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [
      `gax/${this._gaxModule.version}`,
      `gapic/${version}`,
    ];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else if (opts.fallback === 'rest' ) {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      environmentPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/environments/{environment}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this.descriptors.page = {
      listImageVersions:
          new this._gaxModule.PageDescriptor('pageToken', 'nextPageToken', 'imageVersions')
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'google.cloud.orchestration.airflow.service.v1beta1.ImageVersions', gapicConfig as gax.ClientConfig,
        opts.clientConfig || {}, {'x-goog-api-client': clientHeader.join(' ')});

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = gax.warn;
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.imageVersionsStub) {
      return this.imageVersionsStub;
    }

    // Put together the "service stub" for
    // google.cloud.orchestration.airflow.service.v1beta1.ImageVersions.
    this.imageVersionsStub = this._gaxGrpc.createStub(
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('google.cloud.orchestration.airflow.service.v1beta1.ImageVersions') :
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.orchestration.airflow.service.v1beta1.ImageVersions,
        this._opts, this._providedCustomServicePath) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const imageVersionsStubMethods =
        ['listImageVersions'];
    for (const methodName of imageVersionsStubMethods) {
      const callPromise = this.imageVersionsStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error|null|undefined) => () => {
          throw err;
        });

      const descriptor =
        this.descriptors.page[methodName] ||
        undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.imageVersionsStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'composer.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'composer.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-platform'
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(callback?: Callback<string, undefined, undefined>):
      Promise<string>|void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------

 /**
 * List ImageVersions for provided location.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   List ImageVersions in the given project and location, in the form:
 *   "projects/{projectId}/locations/{locationId}"
 * @param {number} request.pageSize
 *   The maximum number of image_versions to return.
 * @param {string} request.pageToken
 *   The next_page_token value returned from a previous List request, if any.
 * @param {boolean} request.includePastReleases
 *   Whether or not image versions from old releases should be included.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [ImageVersion]{@link google.cloud.orchestration.airflow.service.v1beta1.ImageVersion}.
 *   The client library will perform auto-pagination by default: it will call the API as many
 *   times as needed and will merge results from all the pages into this array.
 *   Note that it can affect your quota.
 *   We recommend using `listImageVersionsAsync()`
 *   method described below for async iteration which you can stop as needed.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 */
  listImageVersions(
      request?: protos.google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.orchestration.airflow.service.v1beta1.IImageVersion[],
        protos.google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsRequest|null,
        protos.google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsResponse
      ]>;
  listImageVersions(
      request: protos.google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsRequest,
      options: CallOptions,
      callback: PaginationCallback<
          protos.google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsRequest,
          protos.google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsResponse|null|undefined,
          protos.google.cloud.orchestration.airflow.service.v1beta1.IImageVersion>): void;
  listImageVersions(
      request: protos.google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsRequest,
      callback: PaginationCallback<
          protos.google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsRequest,
          protos.google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsResponse|null|undefined,
          protos.google.cloud.orchestration.airflow.service.v1beta1.IImageVersion>): void;
  listImageVersions(
      request?: protos.google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsRequest,
      optionsOrCallback?: CallOptions|PaginationCallback<
          protos.google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsRequest,
          protos.google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsResponse|null|undefined,
          protos.google.cloud.orchestration.airflow.service.v1beta1.IImageVersion>,
      callback?: PaginationCallback<
          protos.google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsRequest,
          protos.google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsResponse|null|undefined,
          protos.google.cloud.orchestration.airflow.service.v1beta1.IImageVersion>):
      Promise<[
        protos.google.cloud.orchestration.airflow.service.v1beta1.IImageVersion[],
        protos.google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsRequest|null,
        protos.google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsResponse
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    this.initialize();
    return this.innerApiCalls.listImageVersions(request, options, callback);
  }

/**
 * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   List ImageVersions in the given project and location, in the form:
 *   "projects/{projectId}/locations/{locationId}"
 * @param {number} request.pageSize
 *   The maximum number of image_versions to return.
 * @param {string} request.pageToken
 *   The next_page_token value returned from a previous List request, if any.
 * @param {boolean} request.includePastReleases
 *   Whether or not image versions from old releases should be included.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Stream}
 *   An object stream which emits an object representing [ImageVersion]{@link google.cloud.orchestration.airflow.service.v1beta1.ImageVersion} on 'data' event.
 *   The client library will perform auto-pagination by default: it will call the API as many
 *   times as needed. Note that it can affect your quota.
 *   We recommend using `listImageVersionsAsync()`
 *   method described below for async iteration which you can stop as needed.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 */
  listImageVersionsStream(
      request?: protos.google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsRequest,
      options?: CallOptions):
    Transform{
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    const defaultCallSettings = this._defaults['listImageVersions'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listImageVersions.createStream(
      this.innerApiCalls.listImageVersions as gax.GaxCall,
      request,
      callSettings
    );
  }

/**
 * Equivalent to `listImageVersions`, but returns an iterable object.
 *
 * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   List ImageVersions in the given project and location, in the form:
 *   "projects/{projectId}/locations/{locationId}"
 * @param {number} request.pageSize
 *   The maximum number of image_versions to return.
 * @param {string} request.pageToken
 *   The next_page_token value returned from a previous List request, if any.
 * @param {boolean} request.includePastReleases
 *   Whether or not image versions from old releases should be included.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Object}
 *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
 *   When you iterate the returned iterable, each element will be an object representing
 *   [ImageVersion]{@link google.cloud.orchestration.airflow.service.v1beta1.ImageVersion}. The API will be called under the hood as needed, once per the page,
 *   so you can stop the iteration when you don't need more results.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1beta1/image_versions.list_image_versions.js</caption>
 * region_tag:composer_v1beta1_generated_ImageVersions_ListImageVersions_async
 */
  listImageVersionsAsync(
      request?: protos.google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsRequest,
      options?: CallOptions):
    AsyncIterable<protos.google.cloud.orchestration.airflow.service.v1beta1.IImageVersion>{
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    const defaultCallSettings = this._defaults['listImageVersions'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listImageVersions.asyncIterate(
      this.innerApiCalls['listImageVersions'] as GaxCall,
      request as unknown as RequestType,
      callSettings
    ) as AsyncIterable<protos.google.cloud.orchestration.airflow.service.v1beta1.IImageVersion>;
  }
  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified environment resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} environment
   * @returns {string} Resource name string.
   */
  environmentPath(project:string,location:string,environment:string) {
    return this.pathTemplates.environmentPathTemplate.render({
      project: project,
      location: location,
      environment: environment,
    });
  }

  /**
   * Parse the project from Environment resource.
   *
   * @param {string} environmentName
   *   A fully-qualified path representing Environment resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromEnvironmentName(environmentName: string) {
    return this.pathTemplates.environmentPathTemplate.match(environmentName).project;
  }

  /**
   * Parse the location from Environment resource.
   *
   * @param {string} environmentName
   *   A fully-qualified path representing Environment resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromEnvironmentName(environmentName: string) {
    return this.pathTemplates.environmentPathTemplate.match(environmentName).location;
  }

  /**
   * Parse the environment from Environment resource.
   *
   * @param {string} environmentName
   *   A fully-qualified path representing Environment resource.
   * @returns {string} A string representing the environment.
   */
  matchEnvironmentFromEnvironmentName(environmentName: string) {
    return this.pathTemplates.environmentPathTemplate.match(environmentName).environment;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    this.initialize();
    if (!this._terminated) {
      return this.imageVersionsStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
