/** Chunk was on 86142 **/
/** chunk id: 585541, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js"), require("./65821.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk110259 = require("./110259.js"),
  Chunk397927 = require("./397927.js"),
  Chunk181658 = require("./181658.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk499785 = require("./499785.js"),
  Chunk524832 = require("./524832.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk497039 = require("./497039.js"),
  Chunk473169 = require("./473169.js");

function A(e) {
  let {
    setOriginalEmail: t,
    setSlide: s,
    ready: A,
    token: x
  } = e, [E, v] = i.useState(false), [b, y] = i.useState(null), [j, I] = i.useState(null), [O, S] = i.useState(""), N = i.useRef(null);
  return i.useEffect(() => {
    if (A) {
      var e;
      null == (e = N.current) || e.focus()
    }
  }, [A]), (0, r.jsxs)("div", {
    children: [(0, r.jsx)(d._V, {
      src: null == j ? n(79418) : n(579656),
      className: l()(m.SX, m.Ot)
    }), (0, r.jsx)(d.hE, {
      children: _.intl.string(_.t.IfBQ56)
    }), null != j && "" !== j ? (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      children: j
    }) : null, (0, r.jsxs)(d.eB, {
      className: l()(m.SX, m.QX),
      children: [(0, r.jsx)(d.pd, {
        name: "password",
        type: "password",
        label: _.intl.string(_.t["8dM4FO"]),
        setRef: N,
        className: m.SX,
        value: O,
        onChange: S,
        error: b,
        autoComplete: "new-password",
        maxLength: 72,
        placeholder: _.intl.string(_.t["yY/PXY"])
      }), (0, r.jsx)("div", {
        className: m.Ot,
        children: (0, r.jsx)(o.Button, {
          text: _.intl.string(_.t.ezv91b),
          fullWidth: true,
          onClick: () => {
            if (!E) {
              if (0 === O.length) {
                y(_.intl.string(_.t.R98xD5)), u._.dispatch(g.jej.WAVE_EMPHASIZE);
                return
              }
              return null != j && I(null), null != b && y(null), t(""), v(true), h.A.post({
                url: g.Rsh.ACCOUNT_REVERT,
                body: {
                  token: x,
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
                S(""), t(n), s(p.k.SUCCESS)
              }).catch(e => {
                if (e instanceof Error) I(_.intl.formatToPlainString(_.t.aTVNes, {
                  statusPageURL: g.qF7.STATUS
                }));
                else {
                  let t = new c.A(e);
                  t.hasFieldErrors() ? y(t.getAnyErrorMessage()) : I((function(e) {
                    switch (e) {
                      case g.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                        return _.intl.string(_.t["11zzGR"]);
                      case g.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                        return _.intl.string(_.t["6qmgaI"]);
                      case g.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                        return _.intl.string(_.t.bChnKs);
                      default:
                        return _.intl.format(_.t.aTVNes, {
                          statusPageURL: g.qF7.STATUS
                        })
                    }
                  })(t.code).toString())
                }
                u._.dispatch(g.jej.WAVE_EMPHASIZE)
              }).finally(() => {
                v(false)
              })
            }
          },
          loading: E,
          disabled: E
        })
      })]
    }), (0, r.jsx)("div", {
      className: f.UD,
      children: (0, r.jsx)(o.Button, {
        text: _.intl.string(_.t.rzxnQ8),
        variant: "secondary",
        fullWidth: true,
        onClick: () => {
          S(""), s(p.k.START)
        }
      })
    })]
  })
}