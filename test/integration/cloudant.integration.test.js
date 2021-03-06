/**
 * © Copyright IBM Corporation 2020. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const { CloudantV1 } = require('../../index.ts');
const authHelper = require('../resources/auth-helper.js');

// Use this to retrieve test-specific config properties from your credentials file.

// testcase timeout value (10s).
const timeout = 10000;

const configFile = 'cloudant.env';
// Use authHelper to skip tests if our configFile is not available
// This step also sets env var IBM_CREDENTIALS_FILE=<configFile>
const describe = authHelper.prepareTests(configFile);

const assert = require('assert');
const cloudant = CloudantV1.newInstance({
  serviceName: 'server',
});
const dbName = process.env.DATABASE_NAME || 'stores';

describe('validate', () => {
  jest.setTimeout(timeout);

  it('server information', () => {
    return cloudant.getServerInformation().then((response) => {
      assert.ok(response);
      const result = response.result;
      assert.ok(result);
      assert.ok(result.couchdb);
      assert.ok(result.version);
    });
  });

  it('db exists', () => {
    return cloudant.headDatabase({ db: dbName }).then((response) => {
      assert.ok(response);
      assert.ok(response.headers);
      assert.ok(Object.keys(response.headers).length > 0);
    });
  });

  it('all docs', () => {
    return cloudant.postAllDocs({ db: dbName }).then((response) => {
      assert.ok(response);
      const result = response.result;
      assert.ok(result);
      assert.ok(result.rows);
      assert.ok(result.rows.length > 0);
    });
  });
});
