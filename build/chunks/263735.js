/** Chunk was on 77069 **/
/** chunk id: 263735, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Q: () => C
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk400287 = require("./400287.jsx"),
  Chunk175600 = require("./175600.js"),
  Chunk99019 = require("./99019.js"),
  Chunk724485 = require("./724485.js"),
  Chunk317134 = require("./317134.js"),
  Chunk316418 = require("./316418.js"),
  Chunk629022 = require("./629022.js"),
  Chunk469843 = require("./469843.js"),
  Chunk505045 = require("./505045.js"),
  Chunk638367 = require("./638367.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let A = (0, Chunk509613.wf)(Chunk313789.n.CHAT_PANEL, {
    useTitle: () => N.intl.string(N.t["/VQax8"]),
    buildLayout: () => [T.k, a.w, o.v, d.m, c.W, _.x, g.b, S.s, E.l]
  }),
  O = (0, Chunk509613.wf)(Chunk313789.n.CHAT_PANEL, {
    useTitle: () => N.intl.string(N.t["/VQax8"]),
    StronglyDiscouragedCustomComponent: Chunk400287.Z,
    buildLayout: () => []
  }),
  C = (0, Chunk509613.m7)(Chunk313789.n.CHAT_SIDEBAR_ITEM, {
    useTitle: () => N.intl.string(N.t["/VQax8"]),
    getLegacySearchKey: () => (0, u.Gl)("ChatPanel") ? true : I.s6.CHAT,
    icon: Chunk657707.ChatIcon,
    buildLayout: () => [(0, u.Gl)("ChatPanel") ? A : O]
  })