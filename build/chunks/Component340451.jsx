/** Chunk was on 86142 **/
/** chunk id: 340451, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk492917 = require("./492917.js"),
  Chunk830215 = require("./830215.js"),
  Chunk964486 = require("./964486.js"),
  Chunk396681 = require("./396681.js"),
  Chunk317940 = require("./317940.jsx"),
  Chunk701273 = require("./701273.js"),
  Chunk210714 = require("./210714.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  n.g.location.assign(e)
}

function A(e) {
  let {
    location: t,
    transitionTo: n = m
  } = e, [s, A] = i.useState("submitting"), x = i.useRef(true);
  (0, o.Ay)(() => {
    (0, h.d)("verify_email");
    let e = (0, c.A)(t);
    null == e ? A("failed") : (async () => {
      try {
        let t = await a.A.verify(e);
        A("succeeded"), x.current = t
      } catch (e) {
        A("failed")
      }
    })()
  });
  let _ = i.useCallback(() => {
      n(p.BVt.LOGIN, {
        source: "verify_email"
      })
    }, [n]),
    E = i.useCallback(() => {
      f.default.track(p.HAw.VERIFY_ACCOUNT_APP_OPENED, {
        verifying_user_id: x.current
      }), (0, d.A)("verify_email")
    }, []);
  return "failed" === s ? (0, r.jsx)(u.A, {
    title: g.intl.string(g.t["PCgG3+"]),
    subtitle: g.intl.string(g.t.tQpeA3),
    buttonText: g.intl.string(g.t.dKhVQN),
    onButtonClick: _
  }) : "succeeded" === s ? (0, r.jsx)(u.A, {
    title: g.intl.string(g.t["dAfGb+"]),
    buttonText: g.intl.string(g.t["uJWIj/"]),
    onButtonClick: E,
    image: (0, r.jsx)(l.bqQ, {
      alt: g.intl.string(g.t["dAfGb+"])
    })
  }) : (0, r.jsx)(u.A, {
    title: g.intl.string(g.t["0c8+5n"]),
    subtitle: g.intl.string(g.t.ULTCBE),
    loading: true
  })
}
Chunk311907.Ay.initialize()