/** Chunk was on 91315 **/
/** chunk id: 314208, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk616780 = require("./616780.js"),
  Chunk471445 = require("./471445.js"),
  Chunk937889 = require("./937889.js"),
  Chunk739566 = require("./739566.js"),
  Chunk267128 = require("./267128.jsx"),
  Chunk884902 = require("./884902.js"),
  Chunk271383 = require("./271383.js"),
  Chunk306680 = require("./306680.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk709054 = require("./709054.js"),
  Chunk51144 = require("./51144.js"),
  Chunk144140 = require("./144140.js"),
  Chunk91159 = require("./91159.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk565365 = require("./565365.js");

function S(e) {
  return e.isActiveThread() ? (0, r.jsx)(N, {
    channel: e
  }) : (0, r.jsx)(C, {
    channel: e
  })
}

function N(e) {
  let {
    channel: t
  } = e, n = (0, a.e7)([b.Z], () => b.Z.getMostRecentMessage(t.id));
  return null == n ? (0, r.jsx)(P, {
    channel: t
  }) : (0, r.jsx)(T, {
    channel: t,
    message: n
  })
}

function P(e) {
  let {
    channel: t
  } = e, n = (0, Z.Ok)(t);
  return (0, r.jsxs)(s.Text, {
    className: y.subtext,
    variant: "text-sm/normal",
    color: "text-default",
    children: [O.intl.string(O.t.Jmh6n9), "\xa0 • \xa0", (0, Z.Ye)(n)]
  })
}

function T(e) {
  let {
    channel: t,
    message: n
  } = e;
  (0, i.$)({
    [t.guild_id]: [n.author.id]
  }, "ThreadBrowserRowSubtext");
  let c = (0, a.e7)([v.default], () => {
      var e;
      return null != (e = v.default.getUser(n.author.id)) ? e : n.author
    }),
    {
      nick: m,
      colorString: f,
      colorStrings: p
    } = (0, d.ZP)(n),
    b = (0, g.X7)(t.guild_id, c.id, p),
    {
      isBlocked: O,
      isIgnored: S
    } = (0, a.cj)([j.Z], () => ({
      isBlocked: j.Z.isBlockedForMessage(n),
      isIgnored: j.Z.isIgnoredForMessage(n)
    }), [n]),
    N = l.useMemo(() => {
      let e = null != n.content && "" !== n.content ? (0, u.ZP)(n, {
          formatInline: true
        }).content : null,
        {
          contentPlaceholder: t,
          renderedContent: l,
          trailingIcon: a,
          leadingIcon: s
        } = (0, h.f)(n, e, O, S, y.messageContent, {
          trailingIconClass: y.messageContentTrailingIcon,
          leadingIconClass: y.messageContentLeadingIcon,
          iconSize: w.WW
        });
      return (0, r.jsxs)(r.Fragment, {
        children: [s, null != l ? l : (0, r.jsx)("span", {
          children: t
        }), a]
      })
    }, [n, O, S]);
  return (0, r.jsxs)(s.Text, {
    className: y.subtext,
    variant: "text-sm/normal",
    color: "text-default",
    children: [(0, r.jsx)(o.Z, {
      className: y.avatar,
      user: c,
      size: s.EFr.SIZE_16
    }), (0, r.jsx)(s.PUh, {
      name: m,
      colorString: f,
      colorStrings: b,
      className: y.authorName
    }), ":\xa0", N, "\xa0 • \xa0", (0, Z.Ye)(x.default.extractTimestamp(n.id))]
  })
}

function C(e) {
  var t, n, l, u;
  let {
    channel: d
  } = e, h = (0, a.e7)([f.ZP], () => f.ZP.lastMessageId(d.id)), j = null == h ? new Date(null != (n = null == (t = d.threadMetadata) ? true : t.archiveTimestamp) ? n : Date.now()).getTime() : x.default.extractTimestamp(h);
  (0, i.$)({
    [d.guild_id]: [d.ownerId]
  }, "ThreadBrowserRowSubtext");
  let b = (0, a.e7)([v.default], () => v.default.getUser(d.ownerId)),
    w = (0, a.e7)([m.ZP], () => m.ZP.getMember(d.guild_id, d.ownerId)),
    S = (0, g.X7)(d.guild_id, null == b ? true : b.id, null != (l = null == w ? true : w.colorStrings) ? l : null),
    N = null != (u = (0, c.KS)(d)) ? u : s.or_;
  return (0, r.jsx)(s.Text, {
    className: y.subtext,
    variant: "text-sm/normal",
    color: "text-default",
    children: null == b ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: y.noAvatarIcon,
        children: (0, r.jsx)(N, {
          width: 10,
          height: 10,
          size: "custom",
          color: "currentColor"
        })
      }), O.intl.format(O.t["5Wk9+o"], {
        time: (0, Z.Ye)(j)
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.Z, {
        className: y.avatar,
        user: b,
        size: s.EFr.SIZE_16
      }), O.intl.format(O.t["GFDmd/"], {
        authorHook(e, t) {
          var n, l;
          return (0, r.jsx)(s.PUh, {
            className: y.startedByName,
            colorString: null != (n = null == w ? true : w.colorString) ? n : null,
            colorStrings: S,
            name: null != (l = null == w ? true : w.nick) ? l : p.ZP.getName(b)
          }, t)
        }
      }), (0, r.jsx)("span", {
        className: y.bullet,
        children: "•"
      }), O.intl.format(O.t["5Wk9+o"], {
        time: (0, Z.Ye)(j)
      })]
    })
  })
}