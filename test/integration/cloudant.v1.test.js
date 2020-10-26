/* eslint-disable no-console */
/**
 * (C) Copyright IBM Corp. 2020.
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
const CloudantV1 = require('../../dist/cloudant/v1');
const authHelper = require('../resources/auth-helper.js');

// testcase timeout value (200s).
const timeout = 200000;

// Location of our config file.
const configFile = 'cloudant_v1.env';

const describe = authHelper.prepareTests(configFile);

describe('CloudantV1_integration', () => {
  const cloudantService = CloudantV1.newInstance({});

  jest.setTimeout(timeout);

  test('getServerInformation()', done => {
    cloudantService.getServerInformation({})
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getMembershipInformation()', done => {
    cloudantService.getMembershipInformation({})
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getUuids()', done => {
    const params = {
      count: 1,
    };

    cloudantService.getUuids(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('headDatabase()', done => {
    const params = {
      db: 'testString',
    };

    cloudantService.headDatabase(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getAllDbs()', done => {
    const params = {
      descending: true,
      endkey: 'testString',
      limit: 0,
      skip: 0,
      startkey: 'testString',
    };

    cloudantService.getAllDbs(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postDbsInfo()', done => {
    const params = {
      keys: ['testString'],
    };

    cloudantService.postDbsInfo(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getDatabaseInformation()', done => {
    const params = {
      db: 'testString',
    };

    cloudantService.getDatabaseInformation(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('putDatabase()', done => {
    const params = {
      db: 'testString',
      partitioned: true,
      q: 1,
    };

    cloudantService.putDatabase(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postChanges()', done => {
    const params = {
      db: 'testString',
      docIds: ['testString'],
      fields: ['testString'],
      selector: { 'key1': 'testString' },
      lastEventId: 'testString',
      attEncodingInfo: true,
      attachments: true,
      conflicts: true,
      descending: true,
      feed: 'continuous',
      filter: 'testString',
      heartbeat: 0,
      includeDocs: true,
      limit: 0,
      seqInterval: 1,
      since: 'testString',
      style: 'testString',
      timeout: 0,
      view: 'testString',
    };

    cloudantService.postChanges(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postChangesAsStream()', done => {
    const params = {
      db: 'testString',
      docIds: ['SpaghettiWithMeatballs'],
      fields: ['testString'],
      selector: { 'key1': 'testString' },
      lastEventId: 'testString',
      attEncodingInfo: true,
      attachments: true,
      conflicts: true,
      descending: true,
      feed: 'continuous',
      filter: 'testString',
      heartbeat: 0,
      includeDocs: true,
      limit: 0,
      seqInterval: 1,
      since: 'testString',
      style: 'testString',
      timeout: 0,
      view: 'testString',
    };

    cloudantService.postChangesAsStream(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('headDocument()', done => {
    const params = {
      db: 'testString',
      docId: 'testString',
      ifNoneMatch: 'testString',
      latest: true,
      rev: 'testString',
    };

    cloudantService.headDocument(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postDocument()', done => {
    // Request models needed by this operation.

    // Attachment
    const attachmentModel = {
      content_type: 'testString',
      data: 'This is a mock byte array value.',
      digest: 'testString',
      encoded_length: 0,
      encoding: 'testString',
      follows: true,
      length: 0,
      revpos: 1,
      stub: true,
    };

    // Revisions
    const revisionsModel = {
      ids: ['testString'],
      start: 1,
    };

    // DocumentRevisionStatus
    const documentRevisionStatusModel = {
      rev: 'testString',
      status: 'available',
    };

    // Document
    const documentModel = {
      _attachments: { 'key1': attachmentModel },
      _conflicts: ['testString'],
      _deleted: true,
      _deleted_conflicts: ['testString'],
      _id: 'testString',
      _local_seq: 'testString',
      _rev: 'testString',
      _revisions: revisionsModel,
      _revs_info: [documentRevisionStatusModel],
      foo: 'testString',
    };

    const params = {
      db: 'testString',
      document: documentModel,
      contentType: 'application/json',
      batch: 'ok',
    };

    cloudantService.postDocument(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postAllDocs()', done => {
    const params = {
      db: 'testString',
      attEncodingInfo: true,
      attachments: true,
      conflicts: true,
      descending: true,
      includeDocs: true,
      inclusiveEnd: true,
      limit: 0,
      skip: 0,
      updateSeq: true,
      endkey: 'testString',
      key: 'testString',
      keys: ['testString'],
      startkey: 'testString',
    };

    cloudantService.postAllDocs(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postAllDocsAsStream()', done => {
    const params = {
      db: 'testString',
      attEncodingInfo: true,
      attachments: true,
      conflicts: true,
      descending: true,
      includeDocs: true,
      inclusiveEnd: true,
      limit: 0,
      skip: 0,
      updateSeq: true,
      endkey: 'testString',
      key: 'testString',
      keys: ['testString'],
      startkey: 'testString',
    };

    cloudantService.postAllDocsAsStream(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postAllDocsQueries()', done => {
    // Request models needed by this operation.

    // AllDocsQuery
    const allDocsQueryModel = {
      att_encoding_info: true,
      attachments: true,
      conflicts: true,
      descending: true,
      include_docs: true,
      inclusive_end: true,
      limit: 0,
      skip: 0,
      update_seq: true,
      endkey: 'testString',
      key: 'testString',
      keys: ['testString'],
      startkey: 'testString',
    };

    const params = {
      db: 'testString',
      queries: [allDocsQueryModel],
    };

    cloudantService.postAllDocsQueries(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postAllDocsQueriesAsStream()', done => {
    // Request models needed by this operation.

    // AllDocsQuery
    const allDocsQueryModel = {
      att_encoding_info: true,
      attachments: true,
      conflicts: true,
      descending: true,
      include_docs: true,
      inclusive_end: true,
      limit: 0,
      skip: 0,
      update_seq: true,
      endkey: 'testString',
      key: 'testString',
      keys: ['lemur', 'panda'],
      startkey: 'testString',
    };

    const params = {
      db: 'testString',
      queries: [{ keys: ['lemur', 'panda'] }, { limit: 3, skip: 2 }],
    };

    cloudantService.postAllDocsQueriesAsStream(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postBulkDocs()', done => {
    // Request models needed by this operation.

    // Attachment
    const attachmentModel = {
      content_type: 'testString',
      data: 'This is a mock byte array value.',
      digest: 'testString',
      encoded_length: 0,
      encoding: 'testString',
      follows: true,
      length: 0,
      revpos: 1,
      stub: true,
    };

    // Revisions
    const revisionsModel = {
      ids: ['testString'],
      start: 1,
    };

    // DocumentRevisionStatus
    const documentRevisionStatusModel = {
      rev: 'testString',
      status: 'available',
    };

    // Document
    const documentModel = {
      _attachments: { 'key1': attachmentModel },
      _conflicts: ['testString'],
      _deleted: true,
      _deleted_conflicts: ['testString'],
      _id: 'testString',
      _local_seq: 'testString',
      _rev: 'testString',
      _revisions: revisionsModel,
      _revs_info: [documentRevisionStatusModel],
      foo: 'testString',
    };

    // BulkDocs
    const bulkDocsModel = {
      docs: [documentModel],
      new_edits: true,
    };

    const params = {
      db: 'testString',
      bulkDocs: bulkDocsModel,
    };

    cloudantService.postBulkDocs(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postBulkGet()', done => {
    // Request models needed by this operation.

    // BulkGetQueryDocument
    const bulkGetQueryDocumentModel = {
      atts_since: ['testString'],
      id: 'testString',
      open_revs: ['testString'],
      rev: 'testString',
    };

    const params = {
      db: 'testString',
      docs: [bulkGetQueryDocumentModel],
      attachments: true,
      attEncodingInfo: true,
      latest: true,
      revs: true,
    };

    cloudantService.postBulkGet(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postBulkGetAsMixed()', done => {
    // Request models needed by this operation.

    // BulkGetQueryDocument
    const bulkGetQueryDocumentModel = {
      atts_since: ['testString'],
      id: 'foo',
      open_revs: ['testString'],
      rev: '4-753875d51501a6b1883a9d62b4d33f91',
    };

    const params = {
      db: 'testString',
      docs: [{ id: 'foo', rev: '4-753875d51501a6b1883a9d62b4d33f91' }, { id: 'foo', rev: '1-4a7e4ae49c4366eaed8edeaea8f784ad' }, { id: 'bar' }, { id: 'baz' }],
      attachments: true,
      attEncodingInfo: true,
      latest: true,
      revs: true,
    };

    cloudantService.postBulkGetAsMixed(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postBulkGetAsRelated()', done => {
    // Request models needed by this operation.

    // BulkGetQueryDocument
    const bulkGetQueryDocumentModel = {
      atts_since: ['testString'],
      id: 'foo',
      open_revs: ['testString'],
      rev: '4-753875d51501a6b1883a9d62b4d33f91',
    };

    const params = {
      db: 'testString',
      docs: [{ id: 'foo', rev: '4-753875d51501a6b1883a9d62b4d33f91' }, { id: 'foo', rev: '1-4a7e4ae49c4366eaed8edeaea8f784ad' }, { id: 'bar' }, { id: 'baz' }],
      attachments: true,
      attEncodingInfo: true,
      latest: true,
      revs: true,
    };

    cloudantService.postBulkGetAsRelated(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postBulkGetAsStream()', done => {
    // Request models needed by this operation.

    // BulkGetQueryDocument
    const bulkGetQueryDocumentModel = {
      atts_since: ['testString'],
      id: 'foo',
      open_revs: ['testString'],
      rev: '4-753875d51501a6b1883a9d62b4d33f91',
    };

    const params = {
      db: 'testString',
      docs: [{ id: 'foo', rev: '4-753875d51501a6b1883a9d62b4d33f91' }, { id: 'foo', rev: '1-4a7e4ae49c4366eaed8edeaea8f784ad' }, { id: 'bar' }, { id: 'baz' }],
      attachments: true,
      attEncodingInfo: true,
      latest: true,
      revs: true,
    };

    cloudantService.postBulkGetAsStream(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getDocument()', done => {
    const params = {
      db: 'testString',
      docId: 'testString',
      ifNoneMatch: 'testString',
      attachments: true,
      attEncodingInfo: true,
      attsSince: ['testString'],
      conflicts: true,
      deletedConflicts: true,
      latest: true,
      localSeq: true,
      meta: true,
      openRevs: ['testString'],
      rev: 'testString',
      revs: true,
      revsInfo: true,
    };

    cloudantService.getDocument(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getDocumentAsMixed()', done => {
    const params = {
      db: 'testString',
      docId: 'testString',
      ifNoneMatch: 'testString',
      attachments: true,
      attEncodingInfo: true,
      attsSince: ['testString'],
      conflicts: true,
      deletedConflicts: true,
      latest: true,
      localSeq: true,
      meta: true,
      openRevs: ['testString'],
      rev: 'testString',
      revs: true,
      revsInfo: true,
    };

    cloudantService.getDocumentAsMixed(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getDocumentAsRelated()', done => {
    const params = {
      db: 'testString',
      docId: 'testString',
      ifNoneMatch: 'testString',
      attachments: true,
      attEncodingInfo: true,
      attsSince: ['testString'],
      conflicts: true,
      deletedConflicts: true,
      latest: true,
      localSeq: true,
      meta: true,
      openRevs: ['testString'],
      rev: 'testString',
      revs: true,
      revsInfo: true,
    };

    cloudantService.getDocumentAsRelated(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getDocumentAsStream()', done => {
    const params = {
      db: 'testString',
      docId: 'testString',
      ifNoneMatch: 'testString',
      attachments: true,
      attEncodingInfo: true,
      attsSince: ['testString'],
      conflicts: true,
      deletedConflicts: true,
      latest: true,
      localSeq: true,
      meta: true,
      openRevs: ['testString'],
      rev: 'testString',
      revs: true,
      revsInfo: true,
    };

    cloudantService.getDocumentAsStream(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('putDocument()', done => {
    // Request models needed by this operation.

    // Attachment
    const attachmentModel = {
      content_type: 'testString',
      data: 'This is a mock byte array value.',
      digest: 'testString',
      encoded_length: 0,
      encoding: 'testString',
      follows: true,
      length: 0,
      revpos: 1,
      stub: true,
    };

    // Revisions
    const revisionsModel = {
      ids: ['testString'],
      start: 1,
    };

    // DocumentRevisionStatus
    const documentRevisionStatusModel = {
      rev: 'testString',
      status: 'available',
    };

    // Document
    const documentModel = {
      _attachments: { 'key1': attachmentModel },
      _conflicts: ['testString'],
      _deleted: true,
      _deleted_conflicts: ['testString'],
      _id: 'testString',
      _local_seq: 'testString',
      _rev: 'testString',
      _revisions: revisionsModel,
      _revs_info: [documentRevisionStatusModel],
      foo: 'testString',
    };

    const params = {
      db: 'testString',
      docId: 'testString',
      document: documentModel,
      contentType: 'application/json',
      ifMatch: 'testString',
      batch: 'ok',
      newEdits: true,
      rev: 'testString',
    };

    cloudantService.putDocument(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('headDesignDocument()', done => {
    const params = {
      db: 'testString',
      ddoc: 'testString',
      ifNoneMatch: 'testString',
    };

    cloudantService.headDesignDocument(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getDesignDocument()', done => {
    const params = {
      db: 'testString',
      ddoc: 'testString',
      ifNoneMatch: 'testString',
      attachments: true,
      attEncodingInfo: true,
      attsSince: ['testString'],
      conflicts: true,
      deletedConflicts: true,
      latest: true,
      localSeq: true,
      meta: true,
      openRevs: ['testString'],
      rev: 'testString',
      revs: true,
      revsInfo: true,
    };

    cloudantService.getDesignDocument(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('putDesignDocument()', done => {
    // Request models needed by this operation.

    // Attachment
    const attachmentModel = {
      content_type: 'testString',
      data: 'This is a mock byte array value.',
      digest: 'testString',
      encoded_length: 0,
      encoding: 'testString',
      follows: true,
      length: 0,
      revpos: 1,
      stub: true,
    };

    // Revisions
    const revisionsModel = {
      ids: ['testString'],
      start: 1,
    };

    // DocumentRevisionStatus
    const documentRevisionStatusModel = {
      rev: 'testString',
      status: 'available',
    };

    // Analyzer
    const analyzerModel = {
      name: 'classic',
      stopwords: ['testString'],
    };

    // AnalyzerConfiguration
    const analyzerConfigurationModel = {
      name: 'classic',
      stopwords: ['testString'],
      fields: { 'key1': analyzerModel },
    };

    // SearchIndexDefinition
    const searchIndexDefinitionModel = {
      analyzer: analyzerConfigurationModel,
      index: 'testString',
    };

    // DesignDocumentOptions
    const designDocumentOptionsModel = {
      partitioned: true,
    };

    // DesignDocumentViewsMapReduce
    const designDocumentViewsMapReduceModel = {
      map: 'testString',
      reduce: 'testString',
    };

    // GeoIndexDefinition
    const geoIndexDefinitionModel = {
      index: 'testString',
    };

    // DesignDocument
    const designDocumentModel = {
      _attachments: { 'key1': attachmentModel },
      _conflicts: ['testString'],
      _deleted: true,
      _deleted_conflicts: ['testString'],
      _id: 'testString',
      _local_seq: 'testString',
      _rev: 'testString',
      _revisions: revisionsModel,
      _revs_info: [documentRevisionStatusModel],
      autoupdate: true,
      filters: { 'key1': 'testString' },
      indexes: { 'key1': searchIndexDefinitionModel },
      language: 'testString',
      options: designDocumentOptionsModel,
      updates: { 'key1': 'testString' },
      validate_doc_update: { 'key1': 'testString' },
      views: { 'key1': designDocumentViewsMapReduceModel },
      st_indexes: { 'key1': geoIndexDefinitionModel },
      foo: { foo: 'bar' },
    };

    const params = {
      db: 'testString',
      ddoc: 'testString',
      designDocument: designDocumentModel,
      ifMatch: 'testString',
      batch: 'ok',
      newEdits: true,
      rev: 'testString',
    };

    cloudantService.putDesignDocument(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getDesignDocumentInformation()', done => {
    const params = {
      db: 'testString',
      ddoc: 'testString',
    };

    cloudantService.getDesignDocumentInformation(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postDesignDocs()', done => {
    const params = {
      db: 'testString',
      attEncodingInfo: true,
      attachments: true,
      conflicts: true,
      descending: true,
      includeDocs: true,
      inclusiveEnd: true,
      limit: 0,
      skip: 0,
      updateSeq: true,
      endkey: 'testString',
      key: 'testString',
      keys: ['testString'],
      startkey: 'testString',
      accept: 'application/json',
    };

    cloudantService.postDesignDocs(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postDesignDocsQueries()', done => {
    // Request models needed by this operation.

    // AllDocsQuery
    const allDocsQueryModel = {
      att_encoding_info: true,
      attachments: true,
      conflicts: true,
      descending: true,
      include_docs: true,
      inclusive_end: true,
      limit: 0,
      skip: 0,
      update_seq: true,
      endkey: 'testString',
      key: 'testString',
      keys: ['lemur', 'panda'],
      startkey: 'testString',
    };

    const params = {
      db: 'testString',
      queries: [{ keys: ['lemur', 'panda'] }, { limit: 3, skip: 2 }],
      accept: 'application/json',
    };

    cloudantService.postDesignDocsQueries(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postView()', done => {
    const params = {
      db: 'testString',
      ddoc: 'testString',
      view: 'testString',
      attEncodingInfo: true,
      attachments: true,
      conflicts: true,
      descending: true,
      includeDocs: true,
      inclusiveEnd: true,
      limit: 0,
      skip: 0,
      updateSeq: true,
      endkey: 'testString',
      endkeyDocid: 'testString',
      group: true,
      groupLevel: 1,
      key: 'testString',
      keys: ['testString'],
      reduce: true,
      stable: true,
      startkey: 'testString',
      startkeyDocid: 'testString',
      update: 'true',
    };

    cloudantService.postView(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postViewAsStream()', done => {
    const params = {
      db: 'testString',
      ddoc: 'testString',
      view: 'testString',
      attEncodingInfo: true,
      attachments: true,
      conflicts: true,
      descending: true,
      includeDocs: true,
      inclusiveEnd: true,
      limit: 0,
      skip: 0,
      updateSeq: true,
      endkey: 'testString',
      endkeyDocid: 'testString',
      group: true,
      groupLevel: 1,
      key: 'testString',
      keys: ['meatballs', 'spaghetti'],
      reduce: true,
      stable: true,
      startkey: 'testString',
      startkeyDocid: 'testString',
      update: 'true',
    };

    cloudantService.postViewAsStream(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postViewQueries()', done => {
    // Request models needed by this operation.

    // ViewQuery
    const viewQueryModel = {
      att_encoding_info: true,
      attachments: true,
      conflicts: true,
      descending: true,
      include_docs: true,
      inclusive_end: true,
      limit: 0,
      skip: 0,
      update_seq: true,
      endkey: 'testString',
      endkey_docid: 'testString',
      group: true,
      group_level: 1,
      key: 'testString',
      keys: ['testString'],
      reduce: true,
      stable: true,
      startkey: 'testString',
      startkey_docid: 'testString',
      update: 'true',
    };

    const params = {
      db: 'testString',
      ddoc: 'testString',
      view: 'testString',
      queries: [viewQueryModel],
    };

    cloudantService.postViewQueries(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postViewQueriesAsStream()', done => {
    // Request models needed by this operation.

    // ViewQuery
    const viewQueryModel = {
      att_encoding_info: true,
      attachments: true,
      conflicts: true,
      descending: true,
      include_docs: true,
      inclusive_end: true,
      limit: 0,
      skip: 0,
      update_seq: true,
      endkey: 'testString',
      endkey_docid: 'testString',
      group: true,
      group_level: 1,
      key: 'testString',
      keys: ['meatballs', 'spaghetti'],
      reduce: true,
      stable: true,
      startkey: 'testString',
      startkey_docid: 'testString',
      update: 'true',
    };

    const params = {
      db: 'testString',
      ddoc: 'testString',
      view: 'testString',
      queries: [{ keys: ['meatballs', 'spaghetti'] }, { limit: 3, skip: 2 }],
    };

    cloudantService.postViewQueriesAsStream(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getPartitionInformation()', done => {
    const params = {
      db: 'testString',
      partitionKey: 'testString',
    };

    cloudantService.getPartitionInformation(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postPartitionAllDocs()', done => {
    const params = {
      db: 'testString',
      partitionKey: 'testString',
      attEncodingInfo: true,
      attachments: true,
      conflicts: true,
      descending: true,
      includeDocs: true,
      inclusiveEnd: true,
      limit: 0,
      skip: 0,
      updateSeq: true,
      endkey: 'testString',
      key: 'testString',
      keys: ['testString'],
      startkey: 'testString',
    };

    cloudantService.postPartitionAllDocs(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postPartitionAllDocsAsStream()', done => {
    const params = {
      db: 'testString',
      partitionKey: 'testString',
      attEncodingInfo: true,
      attachments: true,
      conflicts: true,
      descending: true,
      includeDocs: true,
      inclusiveEnd: true,
      limit: 0,
      skip: 0,
      updateSeq: true,
      endkey: 'testString',
      key: 'testString',
      keys: ['testString'],
      startkey: 'testString',
    };

    cloudantService.postPartitionAllDocsAsStream(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postPartitionSearch()', done => {
    const params = {
      db: 'testString',
      partitionKey: 'testString',
      ddoc: 'testString',
      index: 'testString',
      query: 'testString',
      bookmark: 'testString',
      highlightFields: ['testString'],
      highlightNumber: 1,
      highlightPostTag: 'testString',
      highlightPreTag: 'testString',
      highlightSize: 1,
      includeDocs: true,
      includeFields: ['testString'],
      limit: 0,
      sort: ['testString'],
      stale: 'ok',
    };

    cloudantService.postPartitionSearch(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postPartitionSearchAsStream()', done => {
    const params = {
      db: 'testString',
      partitionKey: 'testString',
      ddoc: 'testString',
      index: 'testString',
      query: 'testString',
      bookmark: 'testString',
      highlightFields: ['testString'],
      highlightNumber: 1,
      highlightPostTag: 'testString',
      highlightPreTag: 'testString',
      highlightSize: 1,
      includeDocs: true,
      includeFields: ['testString'],
      limit: 3,
      sort: foo,
      stale: 'ok',
    };

    cloudantService.postPartitionSearchAsStream(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postPartitionView()', done => {
    const params = {
      db: 'testString',
      partitionKey: 'testString',
      ddoc: 'testString',
      view: 'testString',
      attEncodingInfo: true,
      attachments: true,
      conflicts: true,
      descending: true,
      includeDocs: true,
      inclusiveEnd: true,
      limit: 0,
      skip: 0,
      updateSeq: true,
      endkey: 'testString',
      endkeyDocid: 'testString',
      group: true,
      groupLevel: 1,
      key: 'testString',
      keys: ['meatballs', 'spaghetti'],
      reduce: true,
      stable: true,
      startkey: 'testString',
      startkeyDocid: 'testString',
      update: 'true',
    };

    cloudantService.postPartitionView(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postPartitionViewAsStream()', done => {
    const params = {
      db: 'testString',
      partitionKey: 'testString',
      ddoc: 'testString',
      view: 'testString',
      attEncodingInfo: true,
      attachments: true,
      conflicts: true,
      descending: true,
      includeDocs: true,
      inclusiveEnd: true,
      limit: 0,
      skip: 0,
      updateSeq: true,
      endkey: 'testString',
      endkeyDocid: 'testString',
      group: true,
      groupLevel: 1,
      key: 'testString',
      keys: ['meatballs', 'spaghetti'],
      reduce: true,
      stable: true,
      startkey: 'testString',
      startkeyDocid: 'testString',
      update: 'true',
    };

    cloudantService.postPartitionViewAsStream(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postPartitionFind()', done => {
    const params = {
      db: 'testString',
      partitionKey: 'testString',
      selector: { 'key1': 'testString' },
      bookmark: 'testString',
      conflicts: true,
      executionStats: true,
      fields: ['testString'],
      limit: 0,
      skip: 0,
      sort: [{ 'key1': 'asc' }],
      stable: true,
      update: 'false',
      useIndex: ['testString'],
    };

    cloudantService.postPartitionFind(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postPartitionFindAsStream()', done => {
    const params = {
      db: 'testString',
      partitionKey: 'testString',
      selector: { 'key1': 'testString' },
      bookmark: 'testString',
      conflicts: true,
      executionStats: true,
      fields: ['testString'],
      limit: 0,
      skip: 0,
      sort: [{ 'key1': 'asc' }],
      stable: true,
      update: 'false',
      useIndex: ['testString'],
    };

    cloudantService.postPartitionFindAsStream(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postExplain()', done => {
    const params = {
      db: 'testString',
      selector: { 'key1': { foo: 'bar' } },
      bookmark: 'testString',
      conflicts: true,
      executionStats: true,
      fields: ['testString'],
      limit: 0,
      skip: 0,
      sort: [{ 'key1': 'asc' }],
      stable: true,
      update: 'false',
      useIndex: ['testString'],
      r: 1,
    };

    cloudantService.postExplain(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postFind()', done => {
    const params = {
      db: 'testString',
      selector: { 'key1': { foo: 'bar' } },
      bookmark: 'testString',
      conflicts: true,
      executionStats: true,
      fields: ['testString'],
      limit: 0,
      skip: 0,
      sort: [{ 'key1': 'asc' }],
      stable: true,
      update: 'false',
      useIndex: ['testString'],
      r: 1,
    };

    cloudantService.postFind(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postFindAsStream()', done => {
    const params = {
      db: 'testString',
      selector: { 'key1': { foo: 'bar' } },
      bookmark: 'testString',
      conflicts: true,
      executionStats: true,
      fields: ['testString'],
      limit: 0,
      skip: 0,
      sort: [{ 'key1': 'asc' }],
      stable: true,
      update: 'false',
      useIndex: ['testString'],
      r: 1,
    };

    cloudantService.postFindAsStream(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getIndexesInformation()', done => {
    const params = {
      db: 'testString',
    };

    cloudantService.getIndexesInformation(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postIndex()', done => {
    // Request models needed by this operation.

    // Analyzer
    const analyzerModel = {
      name: 'classic',
      stopwords: ['testString'],
    };

    // IndexTextOperatorDefaultField
    const indexTextOperatorDefaultFieldModel = {
      analyzer: analyzerModel,
      enabled: true,
    };

    // IndexField
    const indexFieldModel = {
      name: 'testString',
      type: 'boolean',
      foo: 'asc',
    };

    // IndexDefinition
    const indexDefinitionModel = {
      default_analyzer: analyzerModel,
      default_field: indexTextOperatorDefaultFieldModel,
      fields: [indexFieldModel],
      index_array_lengths: true,
    };

    const params = {
      db: 'testString',
      index: indexDefinitionModel,
      ddoc: 'testString',
      def: indexDefinitionModel,
      name: 'testString',
      partialFilterSelector: { 'key1': 'testString' },
      partitioned: true,
      type: 'json',
    };

    cloudantService.postIndex(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postSearchAnalyze()', done => {
    const params = {
      analyzer: 'arabic',
      text: 'testString',
    };

    cloudantService.postSearchAnalyze(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postSearch()', done => {
    const params = {
      db: 'testString',
      ddoc: 'testString',
      index: 'testString',
      query: 'testString',
      bookmark: 'testString',
      highlightFields: ['testString'],
      highlightNumber: 1,
      highlightPostTag: 'testString',
      highlightPreTag: 'testString',
      highlightSize: 1,
      includeDocs: true,
      includeFields: ['testString'],
      limit: 0,
      sort: ['testString'],
      stale: 'ok',
      counts: ['testString'],
      drilldown: [['testString']],
      groupField: 'testString',
      groupLimit: 1,
      groupSort: ['testString'],
      ranges: { 'key1': { 'key1': { 'key1': 'testString' } } },
    };

    cloudantService.postSearch(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postSearchAsStream()', done => {
    const params = {
      db: 'testString',
      ddoc: 'testString',
      index: 'testString',
      query: 'testString',
      bookmark: 'testString',
      highlightFields: ['testString'],
      highlightNumber: 1,
      highlightPostTag: 'testString',
      highlightPreTag: 'testString',
      highlightSize: 1,
      includeDocs: true,
      includeFields: ['testString'],
      limit: 3,
      sort: foo,
      stale: 'ok',
      counts: ['testString'],
      drilldown: [['testString']],
      groupField: 'testString',
      groupLimit: 1,
      groupSort: ['testString'],
      ranges: { 'key1': { 'key1': { 'key1': 'testString' } } },
    };

    cloudantService.postSearchAsStream(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getSearchInfo()', done => {
    const params = {
      db: 'testString',
      ddoc: 'testString',
      index: 'testString',
    };

    cloudantService.getSearchInfo(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getGeo()', done => {
    const params = {
      db: 'testString',
      ddoc: 'testString',
      index: 'testString',
      bbox: 'testString',
      bookmark: 'testString',
      format: 'legacy',
      g: 'testString',
      includeDocs: true,
      lat: -90,
      limit: 0,
      lon: -180,
      nearest: true,
      radius: 0,
      rangex: 0,
      rangey: 0,
      relation: 'contains',
      skip: 0,
      stale: 'ok',
    };

    cloudantService.getGeo(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getGeoAsStream()', done => {
    const params = {
      db: 'testString',
      ddoc: 'testString',
      index: 'testString',
      bbox: 'testString',
      bookmark: 'testString',
      format: 'legacy',
      g: 'testString',
      includeDocs: true,
      lat: -90,
      limit: 0,
      lon: -180,
      nearest: true,
      radius: 0,
      rangex: 0,
      rangey: 0,
      relation: 'contains',
      skip: 0,
      stale: 'ok',
    };

    cloudantService.getGeoAsStream(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postGeoCleanup()', done => {
    const params = {
      db: 'testString',
    };

    cloudantService.postGeoCleanup(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getGeoIndexInformation()', done => {
    const params = {
      db: 'testString',
      ddoc: 'testString',
      index: 'testString',
    };

    cloudantService.getGeoIndexInformation(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getDbUpdates()', done => {
    const params = {
      feed: 'continuous',
      heartbeat: 0,
      timeout: 0,
      since: 'testString',
    };

    cloudantService.getDbUpdates(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('headReplicationDocument()', done => {
    const params = {
      docId: 'testString',
      ifNoneMatch: 'testString',
    };

    cloudantService.headReplicationDocument(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('headSchedulerJob()', done => {
    const params = {
      jobId: 'testString',
    };

    cloudantService.headSchedulerJob(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postReplicate()', done => {
    // Request models needed by this operation.

    // Attachment
    const attachmentModel = {
      content_type: 'testString',
      data: 'This is a mock byte array value.',
      digest: 'testString',
      encoded_length: 0,
      encoding: 'testString',
      follows: true,
      length: 0,
      revpos: 1,
      stub: true,
    };

    // Revisions
    const revisionsModel = {
      ids: ['testString'],
      start: 1,
    };

    // DocumentRevisionStatus
    const documentRevisionStatusModel = {
      rev: 'testString',
      status: 'available',
    };

    // ReplicationCreateTargetParameters
    const replicationCreateTargetParametersModel = {
      n: 1,
      partitioned: true,
      q: 1,
    };

    // ReplicationDatabaseAuthIam
    const replicationDatabaseAuthIamModel = {
      api_key: 'testString',
    };

    // ReplicationDatabaseAuth
    const replicationDatabaseAuthModel = {
      iam: replicationDatabaseAuthIamModel,
    };

    // ReplicationDatabase
    const replicationDatabaseModel = {
      auth: replicationDatabaseAuthModel,
      headers: { 'key1': 'testString' },
      url: 'testString',
    };

    // UserContext
    const userContextModel = {
      db: 'testString',
      name: 'testString',
      roles: ['_reader'],
    };

    // ReplicationDocument
    const replicationDocumentModel = {
      _attachments: { 'key1': attachmentModel },
      _conflicts: ['testString'],
      _deleted: true,
      _deleted_conflicts: ['testString'],
      _id: 'testString',
      _local_seq: 'testString',
      _rev: 'testString',
      _revisions: revisionsModel,
      _revs_info: [documentRevisionStatusModel],
      cancel: true,
      checkpoint_interval: 0,
      connection_timeout: 0,
      continuous: true,
      create_target: true,
      create_target_params: replicationCreateTargetParametersModel,
      doc_ids: ['testString'],
      filter: 'testString',
      http_connections: 1,
      query_params: { 'key1': 'testString' },
      retries_per_request: 0,
      selector: { 'key1': { foo: 'bar' } },
      since_seq: 'testString',
      socket_options: 'testString',
      source: replicationDatabaseModel,
      source_proxy: 'testString',
      target: replicationDatabaseModel,
      target_proxy: 'testString',
      use_checkpoints: true,
      user_ctx: userContextModel,
      worker_batch_size: 1,
      worker_processes: 1,
      foo: { foo: 'bar' },
    };

    const params = {
      replicationDocument: replicationDocumentModel,
    };

    cloudantService.postReplicate(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getReplicationDocument()', done => {
    const params = {
      docId: 'testString',
      ifNoneMatch: 'testString',
      attachments: true,
      attEncodingInfo: true,
      attsSince: ['testString'],
      conflicts: true,
      deletedConflicts: true,
      latest: true,
      localSeq: true,
      meta: true,
      openRevs: ['testString'],
      rev: 'testString',
      revs: true,
      revsInfo: true,
    };

    cloudantService.getReplicationDocument(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('putReplicationDocument()', done => {
    // Request models needed by this operation.

    // Attachment
    const attachmentModel = {
      content_type: 'testString',
      data: 'This is a mock byte array value.',
      digest: 'testString',
      encoded_length: 0,
      encoding: 'testString',
      follows: true,
      length: 0,
      revpos: 1,
      stub: true,
    };

    // Revisions
    const revisionsModel = {
      ids: ['testString'],
      start: 1,
    };

    // DocumentRevisionStatus
    const documentRevisionStatusModel = {
      rev: 'testString',
      status: 'available',
    };

    // ReplicationCreateTargetParameters
    const replicationCreateTargetParametersModel = {
      n: 1,
      partitioned: true,
      q: 1,
    };

    // ReplicationDatabaseAuthIam
    const replicationDatabaseAuthIamModel = {
      api_key: 'testString',
    };

    // ReplicationDatabaseAuth
    const replicationDatabaseAuthModel = {
      iam: replicationDatabaseAuthIamModel,
    };

    // ReplicationDatabase
    const replicationDatabaseModel = {
      auth: replicationDatabaseAuthModel,
      headers: { 'key1': 'testString' },
      url: 'http://myserver.example:5984/foo-db',
    };

    // UserContext
    const userContextModel = {
      db: 'testString',
      name: 'john',
      roles: ['researcher'],
    };

    // ReplicationDocument
    const replicationDocumentModel = {
      _attachments: { 'key1': attachmentModel },
      _conflicts: ['testString'],
      _deleted: true,
      _deleted_conflicts: ['testString'],
      _id: 'testString',
      _local_seq: 'testString',
      _rev: 'testString',
      _revisions: revisionsModel,
      _revs_info: [documentRevisionStatusModel],
      cancel: false,
      checkpoint_interval: 4500,
      connection_timeout: 15000,
      continuous: true,
      create_target: true,
      create_target_params: { q: 1 },
      doc_ids: ['doc', 'doc2', 'doc3'],
      filter: 'ddoc/my_filter',
      http_connections: 10,
      query_params: {},
      retries_per_request: 3,
      selector: {},
      since_seq: '34-g1AAAAGjeJzLYWBgYMlgTmGQT0lKzi9KdU',
      socket_options: '[{keepalive, true}, {nodelay, false}]',
      source: { url: 'http://myserver.example:5984/foo-db' },
      source_proxy: 'http://my-source-proxy.example:8888',
      target: { headers: { Authorization: 'Basic <base64(username:password)>' }, url: 'http://myotherserver.example:5984/bar-db' },
      target_proxy: 'http://my-target-proxy.example:8888',
      use_checkpoints: false,
      user_ctx: { name: 'john', roles: ['researcher'] },
      worker_batch_size: 400,
      worker_processes: 3,
      foo: { foo: 'bar' },
    };

    const params = {
      docId: 'testString',
      replicationDocument: replicationDocumentModel,
      ifMatch: 'testString',
      batch: 'ok',
      newEdits: true,
      rev: 'testString',
    };

    cloudantService.putReplicationDocument(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getSchedulerDocs()', done => {
    const params = {
      limit: 0,
      skip: 0,
      states: ['initializing'],
    };

    cloudantService.getSchedulerDocs(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getSchedulerDocument()', done => {
    const params = {
      docId: 'testString',
    };

    cloudantService.getSchedulerDocument(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getSchedulerJobs()', done => {
    const params = {
      limit: 0,
      skip: 0,
    };

    cloudantService.getSchedulerJobs(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getSchedulerJob()', done => {
    const params = {
      jobId: 'testString',
    };

    cloudantService.getSchedulerJob(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getSessionInformation()', done => {
    cloudantService.getSessionInformation({})
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getSecurity()', done => {
    const params = {
      db: 'testString',
    };

    cloudantService.getSecurity(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('putSecurity()', done => {
    // Request models needed by this operation.

    // SecurityObject
    const securityObjectModel = {
      names: ['testString'],
      roles: ['testString'],
    };

    const params = {
      db: 'testString',
      admins: securityObjectModel,
      members: securityObjectModel,
      cloudant: { 'key1': ['_reader'] },
      couchdbAuthOnly: true,
    };

    cloudantService.putSecurity(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postApiKeys()', done => {
    cloudantService.postApiKeys({})
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('putCloudantSecurityConfiguration()', done => {
    // Request models needed by this operation.

    // SecurityObject
    const securityObjectModel = {
      names: ['testString'],
      roles: ['testString'],
    };

    const params = {
      db: 'testString',
      cloudant: { 'key1': ['_reader'] },
      admins: securityObjectModel,
      members: securityObjectModel,
      couchdbAuthOnly: true,
    };

    cloudantService.putCloudantSecurityConfiguration(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getCorsInformation()', done => {
    cloudantService.getCorsInformation({})
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('putCorsConfiguration()', done => {
    const params = {
      origins: ['testString'],
      allowCredentials: true,
      enableCors: true,
    };

    cloudantService.putCorsConfiguration(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('headAttachment()', done => {
    const params = {
      db: 'testString',
      docId: 'testString',
      attachmentName: 'testString',
      ifMatch: 'testString',
      ifNoneMatch: 'testString',
      rev: 'testString',
    };

    cloudantService.headAttachment(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getAttachment()', done => {
    const params = {
      db: 'testString',
      docId: 'testString',
      attachmentName: 'testString',
      accept: 'testString',
      ifMatch: 'testString',
      ifNoneMatch: 'testString',
      range: 'testString',
      rev: 'testString',
    };

    cloudantService.getAttachment(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('putAttachment()', done => {
    const params = {
      db: 'testString',
      docId: 'testString',
      attachmentName: 'testString',
      attachment: Buffer.from('This is a mock file.'),
      contentType: 'testString',
      ifMatch: 'testString',
      rev: 'testString',
    };

    cloudantService.putAttachment(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getLocalDocument()', done => {
    const params = {
      db: 'testString',
      docId: 'testString',
      accept: 'application/json',
      ifNoneMatch: 'testString',
      attachments: true,
      attEncodingInfo: true,
      attsSince: ['testString'],
      localSeq: true,
    };

    cloudantService.getLocalDocument(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('putLocalDocument()', done => {
    // Request models needed by this operation.

    // Attachment
    const attachmentModel = {
      content_type: 'testString',
      data: 'This is a mock byte array value.',
      digest: 'testString',
      encoded_length: 0,
      encoding: 'testString',
      follows: true,
      length: 0,
      revpos: 1,
      stub: true,
    };

    // Revisions
    const revisionsModel = {
      ids: ['testString'],
      start: 1,
    };

    // DocumentRevisionStatus
    const documentRevisionStatusModel = {
      rev: 'testString',
      status: 'available',
    };

    // Document
    const documentModel = {
      _attachments: { 'key1': attachmentModel },
      _conflicts: ['testString'],
      _deleted: true,
      _deleted_conflicts: ['testString'],
      _id: 'testString',
      _local_seq: 'testString',
      _rev: 'testString',
      _revisions: revisionsModel,
      _revs_info: [documentRevisionStatusModel],
      foo: 'testString',
    };

    const params = {
      db: 'testString',
      docId: 'testString',
      document: documentModel,
      contentType: 'application/json',
      batch: 'ok',
    };

    cloudantService.putLocalDocument(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postLocalDocs()', done => {
    const params = {
      db: 'testString',
      attEncodingInfo: true,
      attachments: true,
      conflicts: true,
      descending: true,
      includeDocs: true,
      inclusiveEnd: true,
      limit: 0,
      skip: 0,
      updateSeq: true,
      endkey: 'testString',
      key: 'testString',
      keys: ['testString'],
      startkey: 'testString',
      accept: 'application/json',
    };

    cloudantService.postLocalDocs(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postLocalDocsQueries()', done => {
    // Request models needed by this operation.

    // AllDocsQuery
    const allDocsQueryModel = {
      att_encoding_info: true,
      attachments: true,
      conflicts: true,
      descending: true,
      include_docs: true,
      inclusive_end: true,
      limit: 0,
      skip: 0,
      update_seq: true,
      endkey: 'testString',
      key: 'testString',
      keys: ['lemur', 'panda'],
      startkey: 'testString',
    };

    const params = {
      db: 'testString',
      queries: [{ keys: ['lemur', 'panda'] }, { limit: 3, skip: 2 }],
      accept: 'application/json',
    };

    cloudantService.postLocalDocsQueries(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postMissingRevs()', done => {
    const params = {
      db: 'testString',
      documentRevisions: {},
    };

    cloudantService.postMissingRevs(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('postRevsDiff()', done => {
    const params = {
      db: 'testString',
      documentRevisions: {},
    };

    cloudantService.postRevsDiff(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getShardsInformation()', done => {
    const params = {
      db: 'testString',
    };

    cloudantService.getShardsInformation(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getDocumentShardsInfo()', done => {
    const params = {
      db: 'testString',
      docId: 'testString',
    };

    cloudantService.getDocumentShardsInfo(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getActiveTasks()', done => {
    cloudantService.getActiveTasks({})
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getUpInformation()', done => {
    cloudantService.getUpInformation({})
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('deleteReplicationDocument()', done => {
    const params = {
      docId: 'testString',
      ifMatch: 'testString',
      batch: 'ok',
      rev: 'testString',
    };

    cloudantService.deleteReplicationDocument(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('deleteLocalDocument()', done => {
    const params = {
      db: 'testString',
      docId: 'testString',
      batch: 'ok',
    };

    cloudantService.deleteLocalDocument(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('deleteIndex()', done => {
    const params = {
      db: 'testString',
      ddoc: 'testString',
      type: 'json',
      index: 'testString',
    };

    cloudantService.deleteIndex(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('deleteDocument()', done => {
    const params = {
      db: 'testString',
      docId: 'testString',
      ifMatch: 'testString',
      batch: 'ok',
      rev: 'testString',
    };

    cloudantService.deleteDocument(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('deleteDesignDocument()', done => {
    const params = {
      db: 'testString',
      ddoc: 'testString',
      ifMatch: 'testString',
      batch: 'ok',
      rev: 'testString',
    };

    cloudantService.deleteDesignDocument(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('deleteDatabase()', done => {
    const params = {
      db: 'testString',
    };

    cloudantService.deleteDatabase(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('deleteAttachment()', done => {
    const params = {
      db: 'testString',
      docId: 'testString',
      attachmentName: 'testString',
      ifMatch: 'testString',
      rev: 'testString',
      batch: 'ok',
    };

    cloudantService.deleteAttachment(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
});
