/** Chunk was on 11298 **/
/** chunk id: 257126, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ef: () => i,
  HO: () => b,
  Wo: () => r,
  bM: () => o,
  cc: () => O,
  cp: () => d,
  sG: () => s,
  xx: () => u
}), require("./781311.js");
var Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx");
let i = "other";

function r(e) {
  return {
    name: e.label,
    value: e.value
  }
}

function u(e, t) {
  return t.find(t => t.value === e)
}

function s(e) {
  let t = e.freeformText.trim().slice(0, l.iF);
  return t.length > 0 ? t : null
}

function b(e) {
  var t;
  return null == (t = e.selectedOption) ? true : t.value
}

function d(e) {
  var t;
  if (null == b(e)) returnfalse;
  if ((null == (t = e.selectedOption) ? true : t.value) === i) {
    let t = s(e);
    return null != t && t.length > 0
  }
  returntrue
}

function o() {
  return [{
    value: "missing_expected_result",
    label: Chunk388032.intl.string(Chunk388032.t["4DEniY"])
  }, {
    value: "no_results",
    label: Chunk388032.intl.string(Chunk388032.t.jlh29f)
  }, {
    value: "required_multiple_searches",
    label: Chunk388032.intl.string(Chunk388032.t.TpGBIC)
  }, {
    value: "buried_expected_result",
    label: Chunk388032.intl.string(Chunk388032.t.Zh6bND)
  }, {
    value: "irrelevant_results",
    label: Chunk388032.intl.string(Chunk388032.t.WCiDBA)
  }, {
    value: "inadequate_filters",
    label: Chunk388032.intl.string(Chunk388032.t.mf36b2)
  }, {
    value: "hard_to_scan_results",
    label: Chunk388032.intl.string(Chunk388032.t.ECI0OT)
  }, {
    value: i,
    label: Chunk388032.intl.string(Chunk388032.t.oxbtmJ)
  }]
}

function O() {
  return [{
    value: "looking_for_known_answer",
    label: Chunk388032.intl.string(Chunk388032.t["Str6/v"])
  }, {
    value: "looking_for_unknown_answer",
    label: Chunk388032.intl.string(Chunk388032.t.DePZNT)
  }, {
    value: "message_from_specific_author",
    label: Chunk388032.intl.string(Chunk388032.t["sGKG/f"])
  }, {
    value: "images_and_files_results",
    label: Chunk388032.intl.string(Chunk388032.t.DYLXHx)
  }, {
    value: "link_results",
    label: Chunk388032.intl.string(Chunk388032.t.a1ZtEx)
  }, {
    value: "specific_topic",
    label: Chunk388032.intl.string(Chunk388032.t.EIHXbW)
  }, {
    value: "navigation_results",
    label: Chunk388032.intl.string(Chunk388032.t["6wKpiY"])
  }, {
    value: i,
    label: Chunk388032.intl.string(Chunk388032.t.RBmOLi)
  }]
}