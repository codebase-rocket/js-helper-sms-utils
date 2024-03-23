// Note: Boilerplate library. Contains SMS utility functions.
'use strict';

// Shared Dependencies (Managed by Loader)
var Lib = {};

// SMS Counter Library for NodeJS (Private scope)
const SmsCounter = require('smshelper');

// Exclusive Dependencies
var CONFIG = require('./config'); // Loader can override it with Custom-Config


/////////////////////////// Module-Loader START ////////////////////////////////

  /********************************************************************
  Load dependencies and configurations

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config - Custom configuration in key-value pairs

  @return nothing
  *********************************************************************/
  const loader = function(shared_libs, config){

    // Shared Dependencies (Must be loaded in memory already)
    Lib.Utils = shared_libs.Utils;
    Lib.Debug = shared_libs.Debug;

    // Override default configuration
    if( !Lib.Utils.isNullOrUndefined(config) ){
      Object.assign(CONFIG, config); // Merge custom configuration with defaults
    }

  };

//////////////////////////// Module-Loader END /////////////////////////////////



///////////////////////////// Module Exports START /////////////////////////////
module.exports = function(shared_libs, config){

  // Run Loader
  loader(shared_libs, config);

  // Return Public Funtions of this module
  return SmsUtils;

};//////////////////////////// Module Exports END //////////////////////////////


///////////////////////////Public Functions START//////////////////////////////
const SmsUtils = { // Public functions accessible by other modules

  /********************************************************************
  Calculate number of SMS a message is split into

  @param {String} sms_message - SMS Body

  @return {Integer} count - Number of messages
  *********************************************************************/
  smsCounter: function(sms_message){

    // return number of sms
    return SmsCounter.parts(sms_message);

  },


  /********************************************************************
  Calculate number of SMS a message is split into

  @param {String} sms_message - SMS Body

  @return {Integer} count - Number of messages
  *********************************************************************/
  getSmsDetails: function(sms_message){

    // Initialize
    var sms_details = {
      'sms_encoding': null,
      'sms_length': null,
      'sms_count': null,
      'remaining_length': null,
      'length_per_sms': null
    };


    // Check if message exist
    if( Lib.Utils.isEmpty(sms_message) ){
      return sms_details;
    }


    // Get Sms Setails
    sms_details['sms_encoding'] = SmsCounter.detectEncoding(sms_message);
    sms_details['sms_length'] = SmsCounter.count(sms_message);
    sms_details['sms_count'] = SmsCounter.parts(sms_message);


    // Return
    return sms_details;

  },


  /********************************************************************
  Clean all spaces ans signes from phone-number

  @param {String} phone_number - Phone Number to be cleaned ('+1 555-5555 555')

  @return {String} phone_number - Newly Generated Customer-ID ('1555555555')
  *********************************************************************/
  cleanPhoneNumber: function(phone_number){

    return Lib.Utils.sanitizeUsingRegx( // Time based random ID
      phone_number,
      /[^0-9]/g, // Regular expression. Digits Only.
    );

  },


}///////////////////////////Public Functions END//////////////////////////////



//////////////////////////Private Functions START//////////////////////////////
const _SmsUtils= { // Private methods accessible within this modules only
  // None
};//////////////////////////Private Functions END//////////////////////////////
