/** Chunk was on 69606 **/
/** chunk id: 715149, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Ef: () => i,
  HO: () => b,
  Wo: () => r,
  bM: () => o,
  cc: () => v,
  cp: () => d,
  sG: () => s,
  xx: () => u
}), require("./781311.js");
var Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx");
let i = "other";

function r(t) {
  return {
    name: t.label,
    value: t.value
  }
}

function u(t, e) {
  return e.find(e => e.value === t)
}

function s(t) {
  let e = t.freeformText.trim().slice(0, l.iF);
  return e.length > 0 ? e : null
}

function b(t) {
  var e;
  return null == (e = t.selectedOption) ? true : e.value
}

function d(t) {
  var e;
  if (null == b(t)) returnfalse;
  if ((null == (e = t.selectedOption) ? true : e.value) === i) {
    let e = s(t);
    return null != e && e.length > 0
  }
  returntrue
}

function o() {
  return [{
    value: "missing_expected_result",
    label: Chunk388032.intl.string(Chunk388032.t["4DEniX"])
  }, {
    value: "no_results",
    label: Chunk388032.intl.string(Chunk388032.t.jlh29e)
  }, {
    value: "required_multiple_searches",
    label: Chunk388032.intl.string(Chunk388032.t.TpGBIB)
  }, {
    value: "buried_expected_result",
    label: Chunk388032.intl.string(Chunk388032.t.Zh6bNN)
  }, {
    value: "irrelevant_results",
    label: Chunk388032.intl.string(Chunk388032.t.WCiDBF)
  }, {
    value: "inadequate_filters",
    label: Chunk388032.intl.string(Chunk388032.t.mf36b7)
  }, {
    value: "hard_to_scan_results",
    label: Chunk388032.intl.string(Chunk388032.t.ECI0Of)
  }, {
    value: i,
    label: Chunk388032.intl.string(Chunk388032.t.oxbtmN)
  }]
}

function v() {
  return [{
    value: "looking_for_known_answer",
    label: Chunk388032.intl.string(Chunk388032.t["Str6/o"])
  }, {
    value: "looking_for_unknown_answer",
    label: Chunk388032.intl.string(Chunk388032.t.DePZNY)
  }, {
    value: "message_from_specific_author",
    label: Chunk388032.intl.string(Chunk388032.t["sGKG/Y"])
  }, {
    value: "images_and_files_results",
    label: Chunk388032.intl.string(Chunk388032.t.DYLXHx)
  }, {
    value: "link_results",
    label: Chunk388032.intl.string(Chunk388032.t.a1ZtE8)
  }, {
    value: "specific_topic",
    label: Chunk388032.intl.string(Chunk388032.t.EIHXbc)
  }, {
    value: "navigation_results",
    label: Chunk388032.intl.string(Chunk388032.t["6wKpiV"])
  }, {
    value: i,
    label: Chunk388032.intl.string(Chunk388032.t.RBmOLj)
  }]
}