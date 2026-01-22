/** Chunk was on web.js **/
/** chunk id: 979746, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk385987 = require("./385987.js"),
  i = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  },
  a = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  },
  s = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  };
let o = {
  date: (0, Chunk385987.A)({
    formats: i,
    defaultWidth: "full"
  }),
  time: (0, Chunk385987.A)({
    formats: a,
    defaultWidth: "full"
  }),
  dateTime: (0, Chunk385987.A)({
    formats: s,
    defaultWidth: "full"
  })
}