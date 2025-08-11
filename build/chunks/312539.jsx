/** Chunk was on 85831 **/
/** chunk id: 312539, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  d: () => M,
  p: () => _
}), require("./388685.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk287734 = require("./287734.js"),
  Chunk627050 = require("./627050.js"),
  Chunk66999 = require("./66999.js"),
  Chunk364640 = require("./364640.js"),
  Chunk754688 = require("./754688.js"),
  Chunk336197 = require("./336197.js"),
  Chunk69626 = require("./69626.jsx"),
  Chunk779699 = require("./779699.js"),
  Chunk797874 = require("./797874.js"),
  Chunk359875 = require("./359875.js"),
  Chunk124072 = require("./124072.jsx"),
  Chunk891984 = require("./891984.js"),
  Chunk644956 = require("./644956.js"),
  Chunk819366 = require("./819366.js"),
  Chunk488968 = require("./488968.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk934415 = require("./934415.js"),
  Chunk823379 = require("./823379.js"),
  Chunk900849 = require("./900849.js"),
  Chunk981631 = require("./981631.js"),
  Chunk689079 = require("./689079.js"),
  Chunk388032 = require("./388032.js");
async function T(e, n, t) {
  if (null == n) return;
  if (d.Z.trackDiscordLinkClicked({
      guildId: e,
      channelId: n,
      messageId: t
    }), null != e) {
    let r = Z.Z.getGuild(e);
    if ((null == r ? true : r.joinedAt) == null) try {
      await S.Ub(e, {}, {
        channelId: n,
        messageId: t
      });
      return
    } catch (e) {}
  }
  let r = I.Z.getChannel(n);
  if (null != r && null == t && (0, w.bw)(r.type) && (0, h.YO)(r)) return void a.default.selectVoiceChannel(r.id);
  (0, f.Z)(E.Z5c.CHANNEL(e, n, t))
}

function _(e) {
  let {
    type: n,
    value: t
  } = e;
  switch (n) {
    case "channel":
      return <M channelId={t} />;
    case "user":
      return <L id={t} />;
    case "role":
      return <Y id={t} />;
    case "everyone":
      return <G roleName={"@everyone"} />;
    case "here":
      return <G roleName={"@here"} />;
    case "game":
      return <F id={t} />;
    case "command":
      return <q id={t.id} name={t.name} />
  }(0, C.vE)(n)
}

function M(e) {
  let {
    channelId: n,
    guildId: l,
    messageId: a
  } = e, s = (0, u.Z)(n), {
    name: d,
    iconType: f,
    isForumPost: j,
    hasAccess: p
  } = (0, c.cj)([I.Z], () => {
    let e = I.Z.getChannel(n);
    return {
      name: null == e ? true : e.name,
      iconType: (0, k.wl)(e),
      isForumPost: null == e ? true : e.isForumPost(),
      hasAccess: null == e || (0, h.YO)(e)
    }
  }, [n]), g = (0, O.d)();
  if (null == f) return;
  let x = l === (null == g ? true : g.guildId) || null == l,
    y = p || s.isSubscriptionGated ? x || null == d ? <m.Z iconType={f}>{null != d ? d : (0, r.jsx)("em", {
        children: D.intl.string(D.t.J90oLS)
      })}</m.Z> : <H guildId={l}>{d}</H> : <m.Z iconType={"locked"}>{D.intl.string(D.t["/YzI6+"])}</m.Z>,
    w = null;
  return null != a && (w = <r.Fragment>{<b.Z />}{<m.Z iconType={j ? "post" : "message"} />}</r.Fragment>), <v.Z role={"link"} onClick={e => {
      null == e || e.stopPropagation(), T(l, n, a), (0, i.pTH)()
    }} onContextMenu={e => {
      let l = I.Z.getChannel(n);
      (0, o.jW)(e, async () => {
        let {
          default: e
        } = await t.e("9573").then(t.bind(t, 546649));
        return t => {
          var c, i, o;
          return (0, r.jsx)(e, (i = function(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {},
                r = Object.keys(t);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
              }))), r.forEach(function(n) {
                var r;
                r = t[n], n in e ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[n] = r
              })
            }
            return e
          }({}, t), o = o = {
            channel: l,
            channelId: null != (c = null == l ? true : l.id) ? c : n,
            originalLink: null,
            messageId: a
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t.push.apply(t, r)
            }
            return t
          })(Object(o)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
          }), i))
        }
      })
    }} className={"channelMention"}>{y}{w}</v.Z>
}

function H(e) {
  let {
    guildId: n,
    children: t
  } = e, l = (0, c.e7)([Z.Z], () => Z.Z.getGuild(n), [n]);
  return <g.Z guild={l}>{null == l ? true : l.name}{null != l ? <b.Z /> : null}{t}</g.Z>
}

function L(e) {
  let {
    id: n
  } = e, t = (0, O.d)();
  return <y.Z className={"mention"} userId={n} channelId={null == t ? true : t.channelId} viewingChannelId={null == t ? true : t.viewingChannelId} parsedUserId={n} content={"<@".concat(n, ">")} />
}

function Y(e) {
  let {
    id: n
  } = e, t = (0, O.d)(), l = null == t ? true : t.guildId, i = (0, c.e7)([P.Z], () => {
    var e, t;
    return null != (t = null != l ? null == (e = P.Z.getRole(l, n)) ? true : e.name : null) ? t : D.intl.string(D.t.sKdZ6e)
  }, [l, n]);
  return <x.Z roleId={n} channelId={null == t ? true : t.channelId} guildId={null == t ? true : t.guildId}>{"@".concat(i)}</x.Z>
}

function F(e) {
  let {
    id: n
  } = e, t = (0, O.d)();
  return s.d.useExperiment({
    location: "native markdown"
  }).enabled ? <p.Z gameId={n} channelId={null == t ? true : t.channelId} /> : <span>{"<@$".concat(n, ">")}</span>
}

function G(e) {
  let {
    roleName: n
  } = e, t = (0, O.d)();
  return <x.Z roleName={n} channelId={null == t ? true : t.channelId} guildId={null == t ? true : t.guildId}>{n}</x.Z>
}

function q(e) {
  let {
    id: n,
    name: t
  } = e, c = (0, O.d)(), i = l.useMemo(() => {
    let [, ...e] = t.split(" ");
    return "".concat(n).concat([...e].map(e => "".concat(N.oQ).concat(e)).join(""))
  }, [n, t]), o = l.useMemo(() => ({
    type: "commandMention",
    channelId: null == c ? true : c.channelId,
    commandId: n,
    commandName: t,
    commandKey: i
  }), [null == c ? true : c.channelId, i, n, t]);
  return <j.Wf node={o}>{t}</j.Wf>
}