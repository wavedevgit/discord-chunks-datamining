/** Chunk was on 91848 **/
/** chunk id: 436457, original params: e,t,n (module,exports,require) **/
let a, o;
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./781311.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk881052 = require("./881052.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk782605 = require("./782605.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk888113 = require("./888113.js");
let E = (a = window.GLOBAL_ENV.INVITE_HOST, o = "", null == a && (a = location.host, o = Chunk981631.Z5c.INVITE("")), "".concat(location.protocol, "//").concat(a).concat(o, "/"));

function N(e) {
  let {
    onBack: t,
    onComplete: n,
    onConnect: a,
    isSlideReady: o
  } = e, [N, x] = s.useState(""), [A, T] = s.useState(false), [C, g] = s.useState(null), j = s.useRef(null);
  s.useEffect(() => {
    var e;
    o && (null == (e = j.current) || e.focus())
  }, [o]);
  let O = s.useCallback(e => {
    e.preventDefault();
    let t = N.trim();
    if ("" === t) return void g(h.intl.string(h.t.IRq5ah));
    g(null), T(true);
    let a = t.split("/"),
      o = a[a.length - 1];
    c.ZP.resolveInvite(o, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (T(false), null == t) return void g(h.intl.string(h.t["GEYI+Z"]));
      if (null != t.channel) {
        let e = c.ZP.getInviteContext("Join Guild", t);
        c.ZP.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            n(), c.ZP.transitionToInvite(e)
          }
        }).catch(e => {
          e instanceof d.yZ || e instanceof d.Hx ? g((0, f.O)(e.code)) : g(h.intl.string(h.t.dDZRdy))
        })
      }
    }, e => {
      T(false);
      let t = new d.yZ(e);
      g((0, f.O)(t.code))
    })
  }, [N, T, g, n]);
  return {
    content: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(l.xBx, {
        "data-migration-pending": true,
        className: b.header,
        direction: u.Z.Direction.VERTICAL,
        separator: false,
        children: [(0, i.jsx)(l.Heading, {
          variant: "heading-xl/bold",
          color: "text-strong",
          className: b.title,
          children: h.intl.string(h.t.riOUtB)
        }), (0, i.jsx)(l.Text, {
          variant: "text-md/normal",
          color: "text-default",
          children: h.intl.string(h.t["7jub2t"])
        })]
      }), (0, i.jsxs)(l.hzk, {
        "data-migration-pending": true,
        children: [(0, i.jsx)("form", {
          onSubmit: O,
          className: b.inputForm,
          children: (0, i.jsx)(l.oil, {
            label: h.intl.string(h.t.qreV25),
            error: C,
            value: N,
            onChange: x,
            inputRef: j
          })
        }), (0, i.jsx)(l.Text, {
          color: "text-default",
          variant: "text-xs/normal",
          children: h.intl.format(h.t.lHTZl2, {
            examples: "".concat(E).concat("wumpus-friends", ", ").concat("hTKzmak")
          })
        }), (0, i.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          className: b.connectCTA,
          children: h.intl.format(h.t["8F/who"], {
            onClick: () => {
              a(), (0, p.openUserSettings)(_.n.CONNECTIONS_PANEL, {
                section: m.oAB.CONNECTIONS
              })
            }
          })
        })]
      })]
    }),
    footer: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.Button, {
        variant: "primary",
        text: h.intl.string(h.t.VJlc0S),
        onClick: O,
        disabled: 0 === N.length,
        loading: A
      }), (0, i.jsx)(r.zx, {
        "data-migration-pending": true,
        className: b.__invalid_skipButton,
        look: r.zx.Looks.BLANK,
        size: r.zx.Sizes.MIN,
        onClick: t,
        children: h.intl.string(h.t["13/7kX"])
      })]
    })
  }
}