/**
 * Copyright 2013-2017 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see http://www.jhipster.tech/
 * for more information.
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


const Set = require('../../utils/objects/set');
const DatabaseTypes = JSON.parse(JSON.stringify(require('./database_types').Types));
// NodeJS caches the requirements, and as we don't want the 'sql' key, we have
// to clone it so as not to impact other requires.
delete DatabaseTypes.sql;

class ApplicationOption {
  constructor(defaultOption, otherOptions) {
    this.default = defaultOption;
    this.values = new Set(otherOptions.concat([defaultOption]));
  }
}

const JHipsterApplicationOptions = {
  applicationType: new ApplicationOption('monolith', ['gateway', 'uaa', 'microservice']),
  authenticationType: new ApplicationOption('jwt', ['oauth2', 'session', 'uaa']),
  buildTool: new ApplicationOption('maven', ['gradle']),
  databaseType: new ApplicationOption('sql', ['no', 'mongodb', 'cassandra', 'couchbase']),
  devDatabaseType: new ApplicationOption('h2Disk', ['no', 'h2Memory'].concat(Object.keys(DatabaseTypes))),
  hibernateCache: new ApplicationOption('ehcache', ['no', 'hazelcast', 'infinispan']),
  prodDatabaseType: new ApplicationOption('mysql', ['no', 'h2Disk', 'h2Memory'].concat(Object.keys(DatabaseTypes))),
  searchEngine: new ApplicationOption(false, ['elasticsearch']),
  websocket: new ApplicationOption(false, ['no', 'spring-websocket'])
};

function isValidValueForOption(option, value) {
  return !!option && !!value && !!JHipsterApplicationOptions[option]
    && JHipsterApplicationOptions[option].values.has(value);
}

module.exports = {
  JHipsterApplicationOptions,
  isValidValueForOption
};
