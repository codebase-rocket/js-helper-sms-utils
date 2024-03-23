// Info: Test Cases
'use strict';

// Shared Dependencies
var Lib = {};

// Dependencies
Lib.Utils = require('js-helper-utils');
Lib.Debug = require('js-helper-debug')(Lib);
const SmsUtils = require('js-helper-sms-utils')(Lib);



////////////////////////////SIMILUTATIONS//////////////////////////////////////

// Dummy sms message
var sms_msg = 'hello from another world';
var sms_msg_long = 'hello from tester. hello from tester.hello from tester. hello from tester. hello from tester. hello from tester. hello from tester. hello from tester. hello from tester. hello from tester. hello from tester. hello from tester. hello from tester. hello from tester. hello from tester. ';
var sms_msg_emoji = '👰🙈🍇💘💏🚦🏧🗄🌓🍄🤒🐳😠🌵🎒📍🌴♒️🅿️⚾️👱🏙🔗🚇📋🆑🐨💽💷📣💇🐹⬇️🔅⚱🌄📩📙🐁❣♊️🏟🛄🚩🚏🔁🍐⚪️⏲🎄❗️🦁🎀👯🕧🕣☕️🎬📱😈🌮▪️😝◀️💅🎁🍧🏀📰🛠🏗😳📓🦀🐤™️🙌🔷🕜🅰️🏪🍦😒😊🎴📝📦⛷⏪🆘🌫🔏🕳🈸👬🎈👽💎';

///////////////////////////////////////////////////////////////////////////////


/////////////////////////////STAGE SETUP///////////////////////////////////////
// Nothing
///////////////////////////////////////////////////////////////////////////////


/////////////////////////////////TESTS/////////////////////////////////////////

// Test smsCounter()
Lib.Debug.log( // Output: 1
  'smsCounter(sms_msg)',
  SmsUtils.smsCounter(sms_msg)
);

Lib.Debug.log( // Output: 2
  'smsCounter(sms_msg_long)',
  SmsUtils.smsCounter(sms_msg_long)
);

Lib.Debug.log( // Output: 3
  'smsCounter(sms_msg_emoji)',
  SmsUtils.smsCounter(sms_msg_emoji)
);


Lib.Debug.log(
  'smsDetails(sms_msg)',
  SmsUtils.getSmsDetails(sms_msg)
);
Lib.Debug.log(
  'smsDetails(sms_msg_long)',
  SmsUtils.getSmsDetails(sms_msg_long)
);
Lib.Debug.log(
  'smsDetails(sms_msg_emoji)',
  SmsUtils.getSmsDetails(sms_msg_emoji)
);


Test cleanPhoneNumber()
Lib.Debug.log( // Output: 3
  'cleanPhoneNumber("+1 555-5555 555")',
  SmsUtils.cleanPhoneNumber("+1 555-5555 555")
);

///////////////////////////////////////////////////////////////////////////////
