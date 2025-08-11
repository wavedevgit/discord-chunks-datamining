/** Chunk was on 93886 **/
/** chunk id: 611565, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk681619 = require("./681619.js"),
  Chunk592125 = require("./592125.js"),
  Chunk787879 = require("./787879.js"),
  Chunk370774 = require("./370774.js"),
  Chunk94091 = require("./94091.js"),
  Chunk616257 = require("./616257.js");
let p = [{
    key: "channelName",
    cellClassName: l()(Chunk94091.cell, Chunk94091.channelName),
    render(e) {
      let {
        channelName: t
      } = e;
      return <s.Text variant={"text-md/normal"}>{t}</s.Text>
    }
  }, {
    key: "channelId",
    cellClassName: l()(Chunk94091.cell, Chunk94091.channelId),
    render(e) {
      let {
        channelId: t
      } = e;
      return <s.Text variant={"text-md/normal"}>{t}</s.Text>
    }
  }],
  b = [{
    key: "channelName",
    cellClassName: l()(Chunk94091.cell, Chunk94091.channelName),
    render(e) {
      let {
        channelName: t
      } = e;
      return <s.Text variant={"text-md/normal"}>{t}</s.Text>
    }
  }, {
    key: "loadState",
    cellClassName: l()(Chunk94091.cell, Chunk94091.loadState),
    render(e) {
      let {
        loadState: t
      } = e;
      return <s.Text variant={"text-md/normal"}>{t}</s.Text>
    }
  }, {
    key: "channelId",
    cellClassName: l()(Chunk94091.cell, Chunk94091.channelId),
    render(e) {
      let {
        channelId: t
      } = e;
      return <s.Text variant={"text-md/normal"}>{t}</s.Text>
    }
  }];

function f() {
  let {
    unreadRecentMentionsCount: e,
    unreadChannelIds: t
  } = (0, Chunk370774.O4)(), {
    isLoading: a,
    hasLoadedEver: r,
    hasPreloaded: l,
    hasMoreToLoad: f,
    isLoadingComplete: v
  } = (0, Chunk399606.cj)([Chunk787879.Z], () => ({
    isLoading: Chunk787879.Z.isLoading,
    hasLoadedEver: Chunk787879.Z.hasLoadedEver,
    hasPreloaded: Chunk787879.Z.hasPreloaded,
    hasMoreToLoad: Chunk787879.Z.hasMoreToLoad,
    isLoadingComplete: Chunk787879.Z.isLoadingComplete
  })), j = (0, Chunk399606.e7)([Chunk787879.Z], () => Chunk787879.Z.currentRequestAnalyticsPayload), g = (0, Chunk399606.cj)([Chunk787879.Z], () => Chunk787879.Z.getChannelInfoMap()), _ = (0, Chunk399606.cj)([Chunk592125.Z], () => {
    let e = {};
    return Object.entries(g).forEach(t => {
      let [a] = t, n = d.Z.getChannel(a);
      e[a] = null != n ? n : null
    }), module
  }), y = (0, Chunk399606.cj)([Chunk592125.Z], () => exports.reduce((e, t) => {
    let a = d.Z.getChannel(t);
    return e[t] = null != a ? a : null, e
  }, {})), C = (0, Chunk399606.e7)([Chunk787879.Z], () => Chunk787879.Z.getInboxMessages()), N = (0, Chunk399606.e7)([Chunk787879.Z], () => Chunk787879.Z.getDevOverrides().navOnClick);
  return <div className={Chunk616257.panel}><Chunk481060.zJl className={Chunk94091.content}>{<div>{<Chunk481060.X6q variant={"heading-lg/semibold"}>{"Inbox"}</Chunk481060.X6q>}{<div>{"Inbox Message Count: "}{C.length}</div>}</div>}{<div>{<Chunk481060.X6q variant={"heading-lg/semibold"}>{"Dev Overrides"}</Chunk481060.X6q>}{<div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginTop: 8
          }}>{<div>{"Nav On Click"}</div>}{<Chunk481060.XZJ value={N} onChange={e => {
              o.Z.dispatch({
                type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES",
                navOnClick: e.target.checked
              })
            }} />}</div>}</div>}{<div>{<Chunk481060.X6q variant={"heading-lg/semibold"}>{"Unreads and Badging"}</Chunk481060.X6q>}{<Chunk481060.LZC size={8} />}{<div>{"Unread Recent Mentions Count: "}{module}</div>}{<div>{"Unread Channel Count: "}{exports.length}</div>}{<Chunk681619.Z columns={p} data={Object.entries(y).map(e => {
            var t;
            let [a, n] = e;
            return {
              key: a,
              channelId: a,
              channelName: null != (t = null == n ? true : n.name) ? t : ""
            }
          })} />}</div>}{<div>{<Chunk481060.X6q variant={"heading-lg/semibold"}>{"Store State"}</Chunk481060.X6q>}{<div>{"Is Loading: "}{require ? "✅" : "❌"}</div>}{<div>{"Has Preloaded: "}{l ? "✅" : "❌"}</div>}{<div>{"Has Loaded Ever: "}{Chunk120356 ? "✅" : "❌"}</div>}{<div>{"Has More To Load: "}{f ? "✅" : "❌"}</div>}{<div>{"Is Loading Complete: "}{v ? "✅" : "❌"}</div>}{<div>{"Last Loading Trigger: "}{null == j ? true : j.loadingTrigger}</div>}</div>}{<div>{<Chunk481060.X6q variant={"heading-lg/semibold"}>{"Channel Info Map"}</Chunk481060.X6q>}{<div>{"Total Channels: "}{Object.keys(g).length}</div>}{<Chunk681619.Z columns={b} data={Object.entries(g).map(e => {
            var t, a;
            let [n, r] = e;
            return {
              key: n,
              channelId: n,
              channelName: null != (a = null == (t = _[n]) ? true : t.name) ? a : "",
              loadState: r.loadState
            }
          })} />}</div>}</Chunk481060.zJl></div>
}