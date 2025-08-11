/** Chunk was on web.js **/
/** chunk id: 600406, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => p,
  k: () => m
}), require("./413496.js"), require("./433524.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk51251 = require("./51251.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk594174 = require("./594174.js"),
  Chunk997612 = require("./997612.js"),
  Chunk981631 = require("./981631.js"),
  Chunk993157 = require("./993157.js");
let _ = RegExp("^dev://mana(/([-\\w._0-9]+))?$", "i");

function p(e) {
  return _.test(e)
}

function h(e) {
  let t = e.match(_);
  return null == t || t.length < 2 ? null : t[2]
}

function m(e) {
  var t;
  let n = (0, o.e7)([c.default], () => {
      let e = c.default.getCurrentUser();
      return (null == e ? true : e.isStaff()) || (null == e ? true : e.isStaffPersonal())
    }),
    _ = i.useMemo(() => {
      var t;
      let n = h(e.url);
      return null == (t = a.$.groups.find(e => e.stories.some(e => e.id === n))) ? true : t.stories.find(e => e.id === n)
    }, [e.url]),
    p = null != (t = null == _ ? true : _.name) ? t : "Mana Playground",
    m = null != _ && null != _.docs ? <s.eee href={_.docs}>{"Documentation"}</s.eee> : "Explore the Mana Design System",
    g = i.useCallback(() => {
      null != _ && u.$.setState({
        selected: _.id
      }), (0, l.jN)(d.S9g.MANA_PLAYGROUND)
    }, [_]);
  return n ? <div className={f.root} data-has-story={null != _}><s.Kqy direction={null == _ ? "vertical" : "horizontal"} align={null == _ ? "start" : "center"} gap={12} justify={null == _ ? "end" : "space-between"}>{<div className={f.header}><s.Kqy direction={"horizontal"} align={"start"} gap={8}>{<s.hh5 size={"lg"} />}{<s.Kqy direction={"vertical"} gap={0}>{<s.Text variant={"text-md/semibold"}>{p}</s.Text>}{<s.Text variant={"text-sm/normal"}>{m}</s.Text>}</s.Kqy>}</s.Kqy></div>}{<s.zxk size={"sm"} onClick={g} text={"Open Playground"} fullWidth={null == _} />}</s.Kqy></div> : null
}