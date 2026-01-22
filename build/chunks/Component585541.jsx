/** Chunk was on 86142 **/
/** chunk id: 585541, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
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

function x(e) {
  let {
    setOriginalEmail: t,
    setSlide: s,
    ready: x,
    token: _
  } = e, [E, b] = i.useState(false), [v, j] = i.useState(null), [y, S] = i.useState(null), [N, O] = i.useState(""), I = i.useRef(null);
  return i.useEffect(() => {
    if (x) {
      var e;
      null == (e = I.current) || e.focus()
    }
  }, [x]), (0, r.jsxs)("div", {
    children: [(0, r.jsx)(u._V, {
      src: null == y ? n(79418) : n(579656),
      className: l()(A.SX, A.Ot)
    }), (0, r.jsx)(u.hE, {
      children: g.intl.string(g.t.IfBQ56)
    }), null != y && "" !== y ? (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      children: y
    }) : null, (0, r.jsxs)(u.eB, {
      className: l()(A.SX, A.QX),
      children: [(0, r.jsx)(u.pd, {
        name: "password",
        type: "password",
        label: g.intl.string(g.t["8dM4FO"]),
        setRef: I,
        className: A.SX,
        value: N,
        onChange: O,
        error: v,
        autoComplete: "new-password",
        maxLength: 72,
        placeholder: g.intl.string(g.t["yY/PXY"])
      }), (0, r.jsx)("div", {
        className: A.Ot,
        children: (0, r.jsx)(o.Button, {
          text: g.intl.string(g.t.ezv91b),
          fullWidth: true,
          onClick: () => {
            if (!E) {
              if (0 === N.length) {
                j(g.intl.string(g.t.R98xD5)), d._.dispatch(p.jej.WAVE_EMPHASIZE);
                return
              }
              return null != y && S(null), null != v && j(null), t(""), b(true), h.A.post({
                url: p.Rsh.ACCOUNT_REVERT,
                body: {
                  token: _,
                  password: N
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
                O(""), t(n), s(f.k.SUCCESS)
              }).catch(e => {
                if (e instanceof Error) S(g.intl.formatToPlainString(g.t.aTVNes, {
                  statusPageURL: p.qF7.STATUS
                }));
                else {
                  let t = new c.A(e);
                  t.hasFieldErrors() ? j(t.getAnyErrorMessage()) : S((function(e) {
                    switch (e) {
                      case p.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                        return g.intl.string(g.t["11zzGR"]);
                      case p.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                        return g.intl.string(g.t["6qmgaI"]);
                      case p.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                        return g.intl.string(g.t.bChnKs);
                      default:
                        return g.intl.format(g.t.aTVNes, {
                          statusPageURL: p.qF7.STATUS
                        })
                    }
                  })(t.code).toString())
                }
                d._.dispatch(p.jej.WAVE_EMPHASIZE)
              }).finally(() => {
                b(false)
              })
            }
          },
          loading: E,
          disabled: E
        })
      })]
    }), (0, r.jsx)("div", {
      className: m.UD,
      children: (0, r.jsx)(o.Button, {
        text: g.intl.string(g.t.rzxnQ8),
        variant: "secondary",
        fullWidth: true,
        onClick: () => {
          O(""), s(f.k.START)
        }
      })
    })]
  })
}