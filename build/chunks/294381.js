/** Chunk was on web.js **/
/** chunk id: 294381, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => c
});
var Chunk333684 = require("./333684.js"),
  Chunk473749 = require("./473749.js"),
  Chunk485853 = require("./485853.js");
let o = ["day", "month", "year"],
  s = {
    hour: 1,
    minute: 2,
    second: 3
  };

function l(e, t) {
  let {
    autoComplete: n,
    isDisabled: i,
    name: l
  } = e, {
    visuallyHiddenProps: c
  } = (0, a.S)({
    style: {
      position: "fixed",
      top: 0,
      left: 0
    }
  }), u = 60;
  "second" === t.granularity ? u = 1 : "hour" === t.granularity && (u = 3600);
  let d = null == t.value ? "" : t.value.toString(),
    f = "day" === t.granularity ? "date" : "datetime-local",
    _ = ["hour", "minute", "second"],
    p = 0;
  return _.includes(t.granularity) && (p = s[t.granularity], _ = _.slice(0, p)), {
    containerProps: {
      ...c,
      "aria-hidden": true,
      "data-react-aria-prevent-focus": true,
      "data-a11y-ignore": "aria-hidden-focus"
    },
    inputProps: {
      tabIndex: false,
      autoComplete: n,
      disabled: i,
      type: f,
      form: "",
      name: l,
      step: u,
      value: d,
      onChange: e => {
        let n = e.target.value.toString();
        if (n) try {
          let e = (0, r.wG)(n);
          if ("day" === t.granularity && (e = (0, r.sG)(n)), "setSegment" in t)
            for (let n in e) o.includes(n) && t.setSegment(n, e[n]), _.includes(n) && t.setSegment(n, e[n]);
          t.setValue(e)
        } catch {}
      }
    }
  }
}

function c(e) {
  let {
    state: t
  } = e, {
    containerProps: n,
    inputProps: r
  } = l({
    ...e
  }, t);
  return i.createElement("div", {
    ...n,
    "data-testid": "hidden-dateinput-container"
  }, i.createElement("input", r))
}