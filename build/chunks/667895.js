/** Chunk was on web.js **/
/** chunk id: 667895, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk261168 = require("./261168.js"),
  i = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  },
  o = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  },
  a = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  };
let s = {
  date: (0, Chunk261168.Z)({
    formats: i,
    defaultWidth: "full"
  }),
  time: (0, Chunk261168.Z)({
    formats: o,
    defaultWidth: "full"
  }),
  dateTime: (0, Chunk261168.Z)({
    formats: a,
    defaultWidth: "full"
  })
}