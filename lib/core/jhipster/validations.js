/**
 * Copyright 2013-2018 the original author or authors from the JHipster project.
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

const VALIDATIONS = {
  REQUIRED: 'required',
  MIN: 'min',
  MAX: 'max',
  MINLENGTH: 'minlength',
  MAXLENGTH: 'maxlength',
  PATTERN: 'pattern',
  MINBYTES: 'minbytes',
  MAXBYTES: 'maxbytes',
  PRIMARY_KEY: 'primarykey'
};

const VALUED = {
  required: false,
  min: true,
  max: true,
  minlength: true,
  maxlength: true,
  pattern: true,
  minbytes: true,
  maxbytes: true
};

function exists(validation) {
  return Object.keys(VALIDATIONS).map(key => VALIDATIONS[key]).includes(validation);
}

function needsValue(validation) {
  return VALUED[validation];
}

module.exports = {
  VALIDATIONS,
  exists,
  needsValue
};
