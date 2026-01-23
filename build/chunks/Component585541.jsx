/** Chunk was on 86142 **/
/** chunk id: 585541, original params: e,t,n (module,exports,require) **/
"use strict";
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
  } = e, [E, v] = i.useState(false), [j, y] = i.useState(null), [b, S] = i.useState(null), [I, N] = i.useState(""), O = i.useRef(null);
  return i.useEffect(() => {
    if (A) {
      var e;
      null == (e = O.current) || e.focus()
    }
  }, [A]), (0, r.jsxs)("div", {
    children: [(0, r.jsx)(u._V, {
      src: null == b ? n(79418) : n(579656),
      className: l()(_.SX, _.Ot)
    }), (0, r.jsx)(u.hE, {
      children: m.intl.string(m.t.IfBQ56)
    }), null != b && "" !== b ? (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      children: b
    }) : null, (0, r.jsxs)(u.eB, {
      className: l()(_.SX, _.QX),
      children: [(0, r.jsx)(u.pd, {
        name: "password",
        type: "password",
        label: m.intl.string(m.t["8dM4FO"]),
        setRef: O,
        className: _.SX,
        value: I,
        onChange: N,
        error: j,
        autoComplete: "new-password",
        maxLength: 72,
        placeholder: m.intl.string(m.t["yY/PXY"])
      }), (0, r.jsx)("div", {
        className: _.Ot,
        children: (0, r.jsx)(o.Button, {
          text: m.intl.string(m.t.ezv91b),
          fullWidth: true,
          onClick: () => {
            if (!E) {
              if (0 === I.length) {
                y(m.intl.string(m.t.R98xD5)), d._.dispatch(g.jej.WAVE_EMPHASIZE);
                return
              }
              return null != b && S(null), null != j && y(null), t(""), v(true), h.A.post({
                url: g.Rsh.ACCOUNT_REVERT,
                body: {
                  token: x,
                  password: I
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
                N(""), t(n), s(p.k.SUCCESS)
              }).catch(e => {
                if (e instanceof Error) S(m.intl.formatToPlainString(m.t.aTVNes, {
                  statusPageURL: g.qF7.STATUS
                }));
                else {
                  let t = new c.A(e);
                  t.hasFieldErrors() ? y(t.getAnyErrorMessage()) : S((function(e) {
                    switch (e) {
                      case g.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                        return m.intl.string(m.t["11zzGR"]);
                      case g.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                        return m.intl.string(m.t["6qmgaI"]);
                      case g.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                        return m.intl.string(m.t.bChnKs);
                      default:
                        return m.intl.format(m.t.aTVNes, {
                          statusPageURL: g.qF7.STATUS
                        })
                    }
                  })(t.code).toString())
                }
                d._.dispatch(g.jej.WAVE_EMPHASIZE)
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
        text: m.intl.string(m.t.rzxnQ8),
        variant: "secondary",
        fullWidth: true,
        onClick: () => {
          N(""), s(p.k.START)
        }
      })
    })]
  })
}