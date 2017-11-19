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

/* eslint-disable no-unused-expressions */

const expect = require('chai').expect;
const ApplicationOptions = require('../../../../lib/core/jhipster/application_options');

describe('ApplicationOptions', () => {
  describe('::isValidValueForOption', () => {
    context('when passing nil parameters', () => {
      it('returns false', () => {
        expect(ApplicationOptions.isValidValueForOption()).to.be.false;
        expect(ApplicationOptions.isValidValueForOption(null, 'toto')).to.be.false;
        expect(ApplicationOptions.isValidValueForOption('titi')).to.be.false;
      });
    });
    context('when passing a wrong option name', () => {
      it('returns false', () => {
        expect(ApplicationOptions.isValidValueForOption('toto', 'spring-websocket')).to.be.false;
      });
    });
    context('when passing a wrong value', () => {
      it('returns false', () => {
        expect(ApplicationOptions.isValidValueForOption('websocket', 'toto')).to.be.false;
      });
    });
    context('when passing correct options', () => {
      it('returns true', () => {
        expect(ApplicationOptions.isValidValueForOption('websocket', 'spring-websocket')).to.be.true;
      });
    });
  });
});
