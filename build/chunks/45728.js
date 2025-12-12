/** Chunk was on web.js **/
/** chunk id: 45728, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => i
});
let r = new Map;
class i {
  format(e) {
    return this.formatter.format(e)
  }
  formatToParts(e) {
    return this.formatter.formatToParts(e)
  }
  formatRange(e, t) {
    if ("function" == typeof this.formatter.formatRange) return this.formatter.formatRange(e, t);
    if (t < e) throw RangeError("End date must be >= start date");
    return `${this.formatter.format(e)} \u{2013} ${this.formatter.format(t)}`
  }
  formatRangeToParts(e, t) {
    if ("function" == typeof this.formatter.formatRangeToParts) return this.formatter.formatRangeToParts(e, t);
    if (t < e) throw RangeError("End date must be >= start date");
    let n = this.formatter.formatToParts(e),
      r = this.formatter.formatToParts(t);
    return [...n.map(e => ({
      ...e,
      source: "startRange"
    })), {
      type: "literal",
      value: " – ",
      source: "shared"
    }, ...r.map(e => ({
      ...e,
      source: "endRange"
    }))]
  }
  resolvedOptions() {
    let e = this.formatter.resolvedOptions();
    return u() && (this.resolvedHourCycle || (this.resolvedHourCycle = d(module.locale, this.options)), module.hourCycle = this.resolvedHourCycle, module.hour12 = "h11" === this.resolvedHourCycle || "h12" === this.resolvedHourCycle), "ethiopic-amete-alem" === module.calendar && (module.calendar = "ethioaa"), module
  }
  constructor(e, t = {}) {
    this.formatter = a(e, t), this.options = t
  }
}
let o = {
  true: {
    ja: "h11"
  },
  false: {}
};

function a(e, t = {}) {
  if ("boolean" == typeof t.hour12 && l()) {
    let n = o[String((t = {
        ...t
      }).hour12)][e.split("-")[0]],
      r = t.hour12 ? "h12" : "h23";
    t.hourCycle = null != n ? n : r, delete t.hour12
  }
  let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? false : 1).join() : "");
  if (r.has(n)) return r.get(n);
  let i = new Intl.DateTimeFormat(e, t);
  return r.set(n, i), i
}
let s = null;

function l() {
  return null == s && (s = "24" === new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: false
  }).format(new Date(2020, 2, 3, 0))), s
}
let c = null;

function u() {
  return null == c && (c = "h12" === new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: false
  }).resolvedOptions().hourCycle), c
}

function d(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, "");
  let n = a(e += (e.includes("-u-") ? "" : "-u") + "-nu-latn", {
      ...t,
      timeZone: true
    }),
    r = parseInt(n.formatToParts(new Date(2020, 2, 3, 0)).find(e => "hour" === e.type).value, 10),
    i = parseInt(n.formatToParts(new Date(2020, 2, 3, 23)).find(e => "hour" === e.type).value, 10);
  if (0 === r && 23 === i) return "h23";
  if (24 === r && 23 === i) return "h24";
  if (0 === r && 11 === i) return "h11";
  if (12 === r && 11 === i) return "h12";
  throw Error("Unexpected hour cycle result")
}