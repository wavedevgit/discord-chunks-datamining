/** Chunk was on 86142 **/
/** chunk id: 340451, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
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

function _(e) {
  n.g.location.assign(e)
}

function m(e) {
  let {
    location: t,
    transitionTo: n = _
  } = e, [s, m] = i.useState("submitting"), A = i.useRef(true);
  (0, o.Ay)(() => {
    (0, h.d)("verify_email");
    let e = (0, c.A)(t);
    null == e ? m("failed") : (async () => {
      try {
        let t = await a.A.verify(e);
        m("succeeded"), A.current = t
      } catch (e) {
        m("failed")
      }
    })()
  });
  let x = i.useCallback(() => {
      n(g.BVt.LOGIN, {
        source: "verify_email"
      })
    }, [n]),
    E = i.useCallback(() => {
      p.default.track(g.HAw.VERIFY_ACCOUNT_APP_OPENED, {
        verifying_user_id: A.current
      }), (0, d.A)("verify_email")
    }, []);
  return "failed" === s ? (0, r.jsx)(u.A, {
    title: f.intl.string(f.t["PCgG3+"]),
    subtitle: f.intl.string(f.t.tQpeA3),
    buttonText: f.intl.string(f.t.dKhVQN),
    onButtonClick: x
  }) : "succeeded" === s ? (0, r.jsx)(u.A, {
    title: f.intl.string(f.t["dAfGb+"]),
    buttonText: f.intl.string(f.t["uJWIj/"]),
    onButtonClick: E,
    image: (0, r.jsx)(l.bqQ, {
      alt: f.intl.string(f.t["dAfGb+"])
    })
  }) : (0, r.jsx)(u.A, {
    title: f.intl.string(f.t["0c8+5n"]),
    subtitle: f.intl.string(f.t.ULTCBE),
    loading: true
  })
}
Chunk311907.Ay.initialize()