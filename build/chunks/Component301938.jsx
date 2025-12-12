/** Chunk was on 27978 **/
/** chunk id: 301938, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./415506.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk573261 = require("./573261.js"),
  Chunk720196 = require("./720196.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk839926 = require("./839926.js"),
  Chunk478411 = require("./478411.js");

function _(e) {
  let {
    setOriginalEmail: t,
    setSlide: s,
    ready: _,
    token: E
  } = e, [v, b] = i.useState(false), [j, I] = i.useState(null), [N, y] = i.useState(null), [S, C] = i.useState(""), O = i.useRef(null);
  return i.useEffect(() => {
    if (_) {
      var e;
      null == (e = O.current) || e.focus()
    }
  }, [_]), (0, r.jsxs)("div", {
    children: [(0, r.jsx)(u.Ee, {
      src: null == N ? n(26230) : n(935227),
      className: a()(x.marginBottom20, x.marginTop8)
    }), (0, r.jsx)(u.Dx, {
      children: m.intl.string(m.t.IfBQ56)
    }), null != N && "" !== N ? (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      children: N
    }) : null, (0, r.jsxs)(u.gO, {
      className: a()(x.marginBottom20, x.marginTop20),
      children: [(0, r.jsx)(u.II, {
        name: "password",
        type: "password",
        label: m.intl.string(m.t["8dM4FO"]),
        setRef: O,
        className: x.marginBottom20,
        value: S,
        onChange: C,
        error: j,
        autoComplete: "new-password",
        maxLength: 72,
        placeholder: m.intl.string(m.t["yY/PXY"])
      }), (0, r.jsx)("div", {
        className: x.marginTop8,
        children: (0, r.jsx)(o.Button, {
          text: m.intl.string(m.t.ezv91b),
          fullWidth: true,
          onClick: () => {
            if (!v) {
              if (0 === S.length) {
                I(m.intl.string(m.t.R98xD5)), d.S.dispatch(g.CkL.WAVE_EMPHASIZE);
                return
              }
              return null != N && y(null), null != j && I(null), t(""), b(true), h.Z.post({
                url: g.ANM.ACCOUNT_REVERT,
                body: {
                  token: E,
                  password: S
                },
                trackedActionData: {
                  event: l.NetworkActionNames.ACCOUNT_REVERT
                },
                rejectWithError: false
              }).then(e => {
                let {
                  body: {
                    email: n
                  }
                } = e;
                C(""), t(n), s(f.n.SUCCESS)
              }).catch(e => {
                if (e instanceof Error) y(m.intl.formatToPlainString(m.t.aTVNes, {
                  statusPageURL: g.yXt.STATUS
                }));
                else {
                  let t = new c.Z(e);
                  t.hasFieldErrors() ? I(t.getAnyErrorMessage()) : y((function(e) {
                    switch (e) {
                      case g.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                        return m.intl.string(m.t["11zzGR"]);
                      case g.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                        return m.intl.string(m.t["6qmgaI"]);
                      case g.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                        return m.intl.string(m.t.bChnKs);
                      default:
                        return m.intl.format(m.t.aTVNes, {
                          statusPageURL: g.yXt.STATUS
                        })
                    }
                  })(t.code).toString())
                }
                d.S.dispatch(g.CkL.WAVE_EMPHASIZE)
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
      className: p.buttonContainer,
      children: (0, r.jsx)(o.Button, {
        text: m.intl.string(m.t.rzxnQ8),
        variant: "secondary",
        fullWidth: true,
        onClick: () => {
          C(""), s(f.n.START)
        }
      })
    })]
  })
}