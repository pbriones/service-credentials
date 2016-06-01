'use strict';
var expect = require('chai').expect;
var creds = require('../lib/service-credentials');

describe('service-credentials', function(){
  it('.getCredentials(service:object)', function(){
    var service = {
      username: 'username',
      password: 'password',
      version: 'v1'
    }
    var credentials = creds.getCredentials(service);
    expect(credentials).to.be.an('object');
    expect(credentials).to.have.keys('username', 'password', 'version');
    expect(credentials).to.have.property('version', 'v1');
  })
})