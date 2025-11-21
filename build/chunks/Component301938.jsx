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
  } = e, [v, j] = i.useState(false), [b, I] = i.useState(null), [y, N] = i.useState(null), [S, O] = i.useState(""), C = i.useRef(null);
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
      children: p.intl.string(p.t.IfBQ56)
    }), null != y && "" !== y ? (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-danger",
      children: y
    }) : null, (0, r.jsxs)(u.gO, {
      className: l()(_.marginBottom20, _.marginTop20),
      children: [(0, r.jsx)(u.II, {
        name: "password",
        type: "password",
        label: p.intl.string(p.t["8dM4FO"]),
        setRef: C,
        className: _.marginBottom20,
        value: S,
        onChange: O,
        error: b,
        autoComplete: "new-password",
        maxLength: 72,
        placeholder: p.intl.string(p.t["yY/PXY"])
      }), (0, r.jsx)("div", {
        className: _.marginTop8,
        children: (0, r.jsx)(o.Button, {
          text: p.intl.string(p.t.ezv91b),
          fullWidth: true,
          onClick: () => {
            if (!v) {
              if (0 === S.length) {
                I(p.intl.string(p.t.R98xD5)), d.S.dispatch(m.CkL.WAVE_EMPHASIZE);
                return
              }
              return null != y && N(null), null != b && I(null), t(""), j(true), h.Z.post({
                url: m.ANM.ACCOUNT_REVERT,
                body: {
                  token: E,
                  password: S
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
                O(""), t(n), s(g.n.SUCCESS)
              }).catch(e => {
                if (e instanceof Error) N(p.intl.formatToPlainString(p.t.aTVNes, {
                  statusPageURL: m.yXt.STATUS
                }));
                else {
                  let t = new c.Z(e);
                  t.hasFieldErrors() ? I(t.getAnyErrorMessage()) : N((function(e) {
                    switch (e) {
                      case m.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                        return p.intl.string(p.t["11zzGR"]);
                      case m.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                        return p.intl.string(p.t["6qmgaI"]);
                      case m.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                        return p.intl.string(p.t.bChnKs);
                      default:
                        return p.intl.format(p.t.aTVNes, {
                          statusPageURL: m.yXt.STATUS
                        })
                    }
                  })(t.code).toString())
                }
                d.S.dispatch(m.CkL.WAVE_EMPHASIZE)
              }).finally(() => {
                j(false)
              })
            }
          },
          loading: v,
          disabled: v
        })
      })]
    }), (0, r.jsx)("div", {
      className: f.buttonContainer,
      children: (0, r.jsx)(o.Button, {
        text: p.intl.string(p.t.rzxnQ8),
        variant: "secondary",
        fullWidth: true,
        onClick: () => {
          O(""), s(g.n.START)
        }
      })
    })]
  })
}