/** Chunk was on 27978 **/
/** chunk id: 301938, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./415506.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk573261 = require("./573261.js"),
  Chunk720196 = require("./720196.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk710509 = require("./710509.js"),
  Chunk197571 = require("./197571.js");

function x(e) {
  let {
    setOriginalEmail: t,
    setSlide: s,
    ready: x,
    token: E
  } = e, [v, b] = i.useState(false), [j, I] = i.useState(null), [y, S] = i.useState(null), [O, N] = i.useState(""), C = i.useRef(null);
  return i.useEffect(() => {
    if (x) {
      var e;
      null == (e = C.current) || e.focus()
    }
  }, [x]), (0, r.jsxs)("div", {
    children: [(0, r.jsx)(u.Ee, {
      src: null == y ? n(26230) : n(935227),
      className: l()(_.marginBottom20, _.marginTop8)
    }), (0, r.jsx)(u.Dx, {
      children: f.intl.string(f.t.IfBQ56)
    }), null != y && "" !== y ? (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      children: y
    }) : null, (0, r.jsxs)(u.gO, {
      className: l()(_.marginBottom20, _.marginTop20),
      children: [(0, r.jsx)(u.II, {
        name: "password",
        type: "password",
        label: f.intl.string(f.t["8dM4FO"]),
        setRef: C,
        className: _.marginBottom20,
        value: O,
        onChange: N,
        error: j,
        autoComplete: "new-password",
        maxLength: 72,
        placeholder: f.intl.string(f.t["yY/PXY"])
      }), (0, r.jsx)("div", {
        className: _.marginTop8,
        children: (0, r.jsx)(o.Button, {
          text: f.intl.string(f.t.ezv91b),
          fullWidth: true,
          onClick: () => {
            if (!v) {
              if (0 === O.length) {
                I(f.intl.string(f.t.R98xD5)), d.S.dispatch(p.CkL.WAVE_EMPHASIZE);
                return
              }
              return null != y && S(null), null != j && I(null), t(""), b(true), h.Z.post({
                url: p.ANM.ACCOUNT_REVERT,
                body: {
                  token: E,
                  password: O
                },
                trackedActionData: {
                  event: a.NetworkActionNames.ACCOUNT_REVERT
                },
                rejectWithError: false
              }).then(e => {
                let {
                  body: {
                    email: n
                  }
                } = e;
                N(""), t(n), s(g.n.SUCCESS)
              }).catch(e => {
                if (e instanceof Error) S(f.intl.formatToPlainString(f.t.aTVNes, {
                  statusPageURL: p.yXt.STATUS
                }));
                else {
                  let t = new c.Z(e);
                  t.hasFieldErrors() ? I(t.getAnyErrorMessage()) : S((function(e) {
                    switch (e) {
                      case p.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                        return f.intl.string(f.t["11zzGR"]);
                      case p.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                        return f.intl.string(f.t["6qmgaI"]);
                      case p.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                        return f.intl.string(f.t.bChnKs);
                      default:
                        return f.intl.format(f.t.aTVNes, {
                          statusPageURL: p.yXt.STATUS
                        })
                    }
                  })(t.code).toString())
                }
                d.S.dispatch(p.CkL.WAVE_EMPHASIZE)
              }).finally(() => {
                b(false)
              })
            }
          },
          loading: v,
          disabled: v
        })
      })]
    }), (0, r.jsx)("div", {
      className: m.buttonContainer,
      children: (0, r.jsx)(o.Button, {
        text: f.intl.string(f.t.rzxnQ8),
        variant: "secondary",
        fullWidth: true,
        onClick: () => {
          N(""), s(g.n.START)
        }
      })
    })]
  })
}