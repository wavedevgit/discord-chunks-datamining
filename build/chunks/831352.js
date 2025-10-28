/** Chunk was on 33622 **/
/** chunk id: 831352, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  j: () => l
});
var Chunk333684 = require("./333684.js"),
  Chunk647438 = require("./647438.js"),
  Chunk513351 = require("./513351.js");
let i = ["day", "month", "year"],
  o = {
    hour: 1,
    minute: 2,
    second: 3
  };

function l(e) {
  let {
    state: a
  } = e, {
    containerProps: t,
    inputProps: l
  } = function(e, a) {
    let {
      autoComplete: t,
      isDisabled: n,
      name: l
    } = e, {
      visuallyHiddenProps: s
    } = (0, r.S)({
      style: {
        position: "fixed",
        top: 0,
        left: 0
      }
    }), d = 60;
    "second" === a.granularity ? d = 1 : "hour" === a.granularity && (d = 3600);
    let c = null == a.value ? "" : a.value.toString(),
      m = "day" === a.granularity ? "date" : "datetime-local",
      D = ["hour", "minute", "second"],
      h = 0;
    return D.includes(a.granularity) && (h = o[a.granularity], D = D.slice(0, h)), {
      containerProps: {
        ...s,
        "aria-hidden": true,
        "data-react-aria-prevent-focus": true,
        "data-a11y-ignore": "aria-hidden-focus"
      },
      inputProps: {
        tabIndex: false,
        autoComplete: t,
        disabled: n,
        type: m,
        form: "",
        name: l,
        step: d,
        value: c,
        onChange: e => {
          let t = e.target.value.toString();
          if (t) try {
            let e = (0, u.wG)(t);
            if ("day" === a.granularity && (e = (0, u.sG)(t)), "setSegment" in a)
              for (let t in e) i.includes(t) && a.setSegment(t, e[t]), D.includes(t) && a.setSegment(t, e[t]);
            a.setValue(e)
          } catch {}
        }
      }
    }
  }({
    ...e
  }, a);
  return n.createElement("div", {
    ...t,
    "data-testid": "hidden-dateinput-container"
  }, n.createElement("input", l))
}