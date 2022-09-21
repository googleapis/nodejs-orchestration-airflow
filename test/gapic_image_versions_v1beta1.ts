// Copyright 2022 Google LLC
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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as imageversionsModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(
  require('../protos/protos.json')
).resolveAll();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTypeDefaultValue(typeName: string, fields: string[]) {
  let type = root.lookupType(typeName) as protobuf.Type;
  for (const field of fields.slice(0, -1)) {
    type = type.fields[field]?.resolvedType as protobuf.Type;
  }
  return type.fields[fields[fields.length - 1]]?.defaultValue;
}

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubPageStreamingCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  const pagingStub = sinon.stub();
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
    }
  }
  const transformStub = error
    ? sinon.stub().callsArgWith(2, error)
    : pagingStub;
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  // trigger as many responses as needed
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      setImmediate(() => {
        mockStream.write({});
      });
    }
    setImmediate(() => {
      mockStream.end();
    });
  } else {
    setImmediate(() => {
      mockStream.write({});
    });
    setImmediate(() => {
      mockStream.end();
    });
  }
  return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  let counter = 0;
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (error) {
            return Promise.reject(error);
          }
          if (counter >= responses!.length) {
            return Promise.resolve({done: true, value: undefined});
          }
          return Promise.resolve({done: false, value: responses![counter++]});
        },
      };
    },
  };
  return sinon.stub().returns(asyncIterable);
}

describe('v1beta1.ImageVersionsClient', () => {
  describe('Common methods', () => {
    it('has servicePath', () => {
      const servicePath =
        imageversionsModule.v1beta1.ImageVersionsClient.servicePath;
      assert(servicePath);
    });

    it('has apiEndpoint', () => {
      const apiEndpoint =
        imageversionsModule.v1beta1.ImageVersionsClient.apiEndpoint;
      assert(apiEndpoint);
    });

    it('has port', () => {
      const port = imageversionsModule.v1beta1.ImageVersionsClient.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client = new imageversionsModule.v1beta1.ImageVersionsClient();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client = new imageversionsModule.v1beta1.ImageVersionsClient({
        fallback: true,
      });
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client = new imageversionsModule.v1beta1.ImageVersionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.imageVersionsStub, undefined);
      await client.initialize();
      assert(client.imageVersionsStub);
    });

    it('has close method for the initialized client', done => {
      const client = new imageversionsModule.v1beta1.ImageVersionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      assert(client.imageVersionsStub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client = new imageversionsModule.v1beta1.ImageVersionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.imageVersionsStub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new imageversionsModule.v1beta1.ImageVersionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
      const result = await client.getProjectId();
      assert.strictEqual(result, fakeProjectId);
      assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new imageversionsModule.v1beta1.ImageVersionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.auth.getProjectId = sinon
        .stub()
        .callsArgWith(0, null, fakeProjectId);
      const promise = new Promise((resolve, reject) => {
        client.getProjectId((err?: Error | null, projectId?: string | null) => {
          if (err) {
            reject(err);
          } else {
            resolve(projectId);
          }
        });
      });
      const result = await promise;
      assert.strictEqual(result, fakeProjectId);
    });
  });

  describe('listImageVersions', () => {
    it('invokes listImageVersions without error', async () => {
      const client = new imageversionsModule.v1beta1.ImageVersionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.orchestration.airflow.service.v1beta1.ImageVersion()
        ),
        generateSampleMessage(
          new protos.google.cloud.orchestration.airflow.service.v1beta1.ImageVersion()
        ),
        generateSampleMessage(
          new protos.google.cloud.orchestration.airflow.service.v1beta1.ImageVersion()
        ),
      ];
      client.innerApiCalls.listImageVersions = stubSimpleCall(expectedResponse);
      const [response] = await client.listImageVersions(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.listImageVersions as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listImageVersions as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listImageVersions without error using callback', async () => {
      const client = new imageversionsModule.v1beta1.ImageVersionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.orchestration.airflow.service.v1beta1.ImageVersion()
        ),
        generateSampleMessage(
          new protos.google.cloud.orchestration.airflow.service.v1beta1.ImageVersion()
        ),
        generateSampleMessage(
          new protos.google.cloud.orchestration.airflow.service.v1beta1.ImageVersion()
        ),
      ];
      client.innerApiCalls.listImageVersions =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.listImageVersions(
          request,
          (
            err?: Error | null,
            result?:
              | protos.google.cloud.orchestration.airflow.service.v1beta1.IImageVersion[]
              | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.listImageVersions as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listImageVersions as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listImageVersions with error', async () => {
      const client = new imageversionsModule.v1beta1.ImageVersionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.listImageVersions = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.listImageVersions(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.listImageVersions as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listImageVersions as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listImageVersionsStream without error', async () => {
      const client = new imageversionsModule.v1beta1.ImageVersionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.orchestration.airflow.service.v1beta1.ImageVersion()
        ),
        generateSampleMessage(
          new protos.google.cloud.orchestration.airflow.service.v1beta1.ImageVersion()
        ),
        generateSampleMessage(
          new protos.google.cloud.orchestration.airflow.service.v1beta1.ImageVersion()
        ),
      ];
      client.descriptors.page.listImageVersions.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.listImageVersionsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.orchestration.airflow.service.v1beta1.ImageVersion[] =
          [];
        stream.on(
          'data',
          (
            response: protos.google.cloud.orchestration.airflow.service.v1beta1.ImageVersion
          ) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const responses = await promise;
      assert.deepStrictEqual(responses, expectedResponse);
      assert(
        (client.descriptors.page.listImageVersions.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listImageVersions, request)
      );
      assert(
        (client.descriptors.page.listImageVersions.createStream as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('invokes listImageVersionsStream with error', async () => {
      const client = new imageversionsModule.v1beta1.ImageVersionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.descriptors.page.listImageVersions.createStream =
        stubPageStreamingCall(undefined, expectedError);
      const stream = client.listImageVersionsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.orchestration.airflow.service.v1beta1.ImageVersion[] =
          [];
        stream.on(
          'data',
          (
            response: protos.google.cloud.orchestration.airflow.service.v1beta1.ImageVersion
          ) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.descriptors.page.listImageVersions.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listImageVersions, request)
      );
      assert(
        (client.descriptors.page.listImageVersions.createStream as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('uses async iteration with listImageVersions without error', async () => {
      const client = new imageversionsModule.v1beta1.ImageVersionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.orchestration.airflow.service.v1beta1.ImageVersion()
        ),
        generateSampleMessage(
          new protos.google.cloud.orchestration.airflow.service.v1beta1.ImageVersion()
        ),
        generateSampleMessage(
          new protos.google.cloud.orchestration.airflow.service.v1beta1.ImageVersion()
        ),
      ];
      client.descriptors.page.listImageVersions.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.google.cloud.orchestration.airflow.service.v1beta1.IImageVersion[] =
        [];
      const iterable = client.listImageVersionsAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (
          client.descriptors.page.listImageVersions.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert(
        (client.descriptors.page.listImageVersions.asyncIterate as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('uses async iteration with listImageVersions with error', async () => {
      const client = new imageversionsModule.v1beta1.ImageVersionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.descriptors.page.listImageVersions.asyncIterate =
        stubAsyncIterationCall(undefined, expectedError);
      const iterable = client.listImageVersionsAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.cloud.orchestration.airflow.service.v1beta1.IImageVersion[] =
          [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (
          client.descriptors.page.listImageVersions.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert(
        (client.descriptors.page.listImageVersions.asyncIterate as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });
  });

  describe('Path templates', () => {
    describe('environment', () => {
      const fakePath = '/rendered/path/environment';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        environment: 'environmentValue',
      };
      const client = new imageversionsModule.v1beta1.ImageVersionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.environmentPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.environmentPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('environmentPath', () => {
        const result = client.environmentPath(
          'projectValue',
          'locationValue',
          'environmentValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.environmentPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromEnvironmentName', () => {
        const result = client.matchProjectFromEnvironmentName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.environmentPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromEnvironmentName', () => {
        const result = client.matchLocationFromEnvironmentName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.environmentPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchEnvironmentFromEnvironmentName', () => {
        const result = client.matchEnvironmentFromEnvironmentName(fakePath);
        assert.strictEqual(result, 'environmentValue');
        assert(
          (client.pathTemplates.environmentPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
