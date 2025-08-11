/** Chunk was on web.js **/
/** chunk id: 833858, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O8: () => p,
  V: () => f,
  tV: () => _
});
var Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk337258 = require("./337258.js"),
  Chunk705196 = require("./705196.js"),
  Chunk190878 = require("./190878.js"),
  Chunk991254 = require("./991254.js"),
  Chunk485686 = require("./485686.js"),
  Chunk400976 = require("./400976.js"),
  Chunk443909 = require("./443909.js");
let f = () => ({
    [Chunk981631.tNA.CHILLING]: {
      title: Chunk388032.intl.string(Chunk388032.t["vkpn7+"]),
      icon: Chunk705196,
      color: "#567C7E"
    },
    [Chunk981631.tNA.GAMING]: {
      title: Chunk388032.intl.string(Chunk388032.t.lZslwM),
      icon: Chunk190878,
      color: "#685F8C"
    },
    [Chunk981631.tNA.FOCUSING]: {
      title: Chunk388032.intl.string(Chunk388032.t.b6AscH),
      icon: Chunk485686,
      color: "#7F6956"
    },
    [Chunk981631.tNA.BRB]: {
      title: Chunk388032.intl.string(Chunk388032.t["30yqZW"]),
      icon: Chunk337258,
      color: "#76567E"
    },
    [Chunk981631.tNA.EATING]: {
      title: Chunk388032.intl.string(Chunk388032.t.UVSEhY),
      icon: Chunk991254,
      color: "#717B54"
    },
    [Chunk981631.tNA.IN_TRANSIT]: {
      title: Chunk388032.intl.string(Chunk388032.t["l0q9/f"]),
      icon: Chunk400976,
      color: "#56697F"
    },
    [Chunk981631.tNA.WATCHING]: {
      title: Chunk388032.intl.string(Chunk388032.t.di6IFx),
      icon: Chunk443909,
      color: "#7C5571"
    }
  }),
  _ = e => {
    if ((null == e ? true : e.type) !== r.IIU.HANG_STATUS || (null == e ? true : e.state) == null) return null;
    let t = e.state;
    return t === r.tNA.CUSTOM ? null : f()[t]
  },
  p = e => {
    var t;
    return ((null == e ? true : e.state) != null ? e.state : null) === r.tNA.CUSTOM ? null == e ? true : e.details : null == (t = _(e)) ? true : t.title
  }