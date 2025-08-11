/** Chunk was on 27978 **/
/** chunk id: 301938, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./415506.js"), require("./457542.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk573261 = require("./573261.js"),
  Chunk720196 = require("./720196.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk578605 = require("./578605.js"),
  Chunk20493 = require("./20493.js");

function x(e) {
  let {
    setOriginalEmail: t,
    setSlide: l,
    ready: x,
    token: b
  } = e, [E, v] = i.useState(false), [j, I] = i.useState(null), [O, S] = i.useState(null), [N, y] = i.useState(""), C = i.useRef(null);
  return i.useEffect(() => {
    if (x) {
      var e;
      null == (e = C.current) || e.focus()
    }
  }, [x]), (0, r.jsxs)("div", {
    children: [(0, r.jsx)(u.Ee, {
      src: null == O ? n(26230) : n(935227),
      className: o()(_.marginBottom20, _.marginTop8)
    }), (0, r.jsx)(u.Dx, {
      children: m.intl.string(m.t["IfBQ5+"])
    }), null != O && "" !== O ? (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "text-danger",
      children: O
    }) : null, (0, r.jsxs)(u.gO, {
      className: o()(_.marginBottom20, _.marginTop20),
      children: [(0, r.jsx)(u.II, {
        name: "password",
        type: "password",
        label: m.intl.string(m.t["8dM4FB"]),
        setRef: C,
        className: _.marginBottom20,
        value: N,
        onChange: y,
        error: j,
        autoComplete: "new-password",
        maxLength: 72,
        placeholder: m.intl.string(m.t["yY/PXV"])
      }), (0, r.jsx)(u.zx, {
        className: _.marginTop8,
        onClick: () => {
          if (!E) {
            if (0 === N.length) {
              I(m.intl.string(m.t.R98xDw)), d.S.dispatch(f.CkL.WAVE_EMPHASIZE);
              return
            }
            return null != O && S(null), null != j && I(null), t(""), v(true), h.Z.post({
              url: f.ANM.ACCOUNT_REVERT,
              body: {
                token: b,
                password: N
              },
              trackedActionData: {
                event: s.NetworkActionNames.ACCOUNT_REVERT
              },
              rejectWithError: false
            }).then(e => {
              let {
                body: {
                  email: n
                }
              } = e;
              y(""), t(n), l(p.n.SUCCESS)
            }).catch(e => {
              if (e instanceof Error) S(m.intl.formatToPlainString(m.t.aTVNen, {
                statusPageURL: f.yXt.STATUS
              }));
              else {
                let t = new c.Z(e);
                t.hasFieldErrors() ? I(t.getAnyErrorMessage()) : S((function(e) {
                  switch (e) {
                    case f.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                      return m.intl.string(m.t["11zzGR"]);
                    case f.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                      return m.intl.string(m.t["6qmgaG"]);
                    case f.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                      return m.intl.string(m.t.bChnKi);
                    default:
                      return m.intl.format(m.t.aTVNen, {
                        statusPageURL: f.yXt.STATUS
                      })
                  }
                })(t.code).toString())
              }
              d.S.dispatch(f.CkL.WAVE_EMPHASIZE)
            }).finally(() => {
              v(false)
            })
          }
        },
        submitting: E,
        disabled: E,
        children: m.intl.string(m.t.ezv91d)
      })]
    }), (0, r.jsx)("div", {
      className: g.buttonContainer,
      children: (0, r.jsx)(u.zx, {
        color: u.zx.Colors.PRIMARY,
        onClick: () => {
          y(""), l(p.n.START)
        },
        children: m.intl.string(m.t.rzxnQ0)
      })
    })]
  })
}