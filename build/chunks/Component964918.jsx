/** Chunk was on 44669 **/
/** chunk id: 964918, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js"), require("./638769.js"), require("./264879.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk730134 = require("./730134.jsx"),
  Chunk378570 = require("./378570.js"),
  Chunk863005 = require("./863005.js"),
  Chunk707539 = require("./707539.js"),
  Chunk747926 = require("./747926.js"),
  Chunk576705 = require("./576705.js"),
  Chunk222823 = require("./222823.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js"),
  Chunk37411 = require("./37411.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk533848 = require("./533848.js");

function x(e) {
  let {
    channel: t
  } = e, i = (0, a.yK)([d.A, f.Ay, g.A], () => {
    let e = d.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
    return s()(d.A.getActiveJoinedThreadsForParent(t.guild_id, t.id)).values().map(e => e.channel).concat(s().values(d.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id))).filter(t => !(t.id in e) && g.A.can(y.xBc.VIEW_CHANNEL, t)).sort((e, t) => {
      let n = f.Ay.lastMessageId(e.id),
        r = f.Ay.lastMessageId(t.id);
      return A.default.compare(n, r)
    }).reverse().value()
  }), c = t.isForumLikeChannel() ? 5 : 3;
  return l.useEffect(() => {
    (0, p.TE)()
  }, []), (0, r.jsxs)("div", {
    className: _.SW,
    children: [(0, r.jsx)(o.Text, {
      className: _.DD,
      variant: "text-xs/bold",
      color: "text-default",
      children: t.isForumLikeChannel() ? j.intl.string(j.t.ioVdO2) : j.intl.string(j.t.VNYs2v)
    }), i.slice(0, t.isForumLikeChannel() ? i.length : c).map(e => (0, r.jsx)(v, {
      thread: e
    }, e.id)).filter(e => l.isValidElement(e)).slice(0, c), (0, r.jsx)(o.DUT, {
      className: _.OS,
      onClick: () => {
        t.isForumLikeChannel() ? (0, u.iN)(t.id) : (0, o.mMO)(async () => {
          let {
            default: e
          } = await n.e("65225").then(n.bind(n, 126768));
          return n => (0, r.jsx)(e, function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({
            channel: t
          }, n))
        })
      },
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: j.intl.string(j.t["4qdZ93"])
      })
    })]
  })
}

function v(e) {
  let {
    thread: t
  } = e, n = (0, a.bG)([m.default], () => m.default.getUser(t.ownerId)), l = (0, p.JO)(t);
  return (0, r.jsxs)(o.DUT, {
    className: _.nM,
    onClick: e => {
      (0, h.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, O.H9.POPOUT)
    },
    children: [null == n ? (0, r.jsx)("img", {
      className: _.my,
      src: b.Ay.getDefaultAvatarURL(true, true),
      alt: ""
    }) : (0, r.jsx)(c.A, {
      className: _.my,
      user: n,
      size: o._3J.SIZE_16
    }), (0, r.jsx)(o.Text, {
      className: _.UU,
      variant: "text-sm/normal",
      color: "none",
      children: t.name
    }), (0, r.jsxs)(o.Text, {
      className: _.vE,
      variant: "text-sm/normal",
      color: "none",
      children: [(0, r.jsx)("span", {
        className: _.xE,
        children: "•"
      }), (0, p.aK)(l)]
    })]
  })
}