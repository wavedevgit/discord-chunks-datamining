/** Chunk was on 93886 **/
/** chunk id: 213713, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk876215 = require("./876215.js"),
  Chunk126313 = require("./126313.js"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk246992 = require("./246992.js"),
  Chunk681619 = require("./681619.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk77498 = require("./77498.js"),
  Chunk823379 = require("./823379.js"),
  Chunk550532 = require("./550532.js"),
  Chunk71585 = require("./71585.js"),
  Chunk146282 = require("./146282.js"),
  Chunk780106 = require("./780106.js"),
  Chunk650613 = require("./650613.js"),
  Chunk789086 = require("./789086.js"),
  Chunk206583 = require("./206583.js"),
  Chunk403542 = require("./403542.js"),
  Chunk616257 = require("./616257.js");
let R = [{
  key: "type",
  cellClassName: i()(Chunk403542.cell, Chunk403542.cellType),
  render(e) {
    let {
      type: t
    } = e;
    return <h.Text variant={"text-md/semibold"}>{c.s[t]}</h.Text>
  }
}, {
  key: "count",
  cellClassName: i()(Chunk403542.cell, Chunk403542.cellCount),
  render(e) {
    let {
      entries: t
    } = e;
    return <div><h.Text variant={"text-md/normal"}>{t.length}</h.Text></div>
  }
}, {
  key: "only?",
  cellClassName: Chunk403542.cell,
  render(e) {
    let {
      type: t
    } = e;
    return <Z type={t} />
  }
}];

function Z(e) {
  var t, a;
  let {
    type: r
  } = e, l = (0, u.e7)([T.Z], () => T.Z.getFilters()), i = null != (a = null == l || null == (t = l.types) ? true : t.has(r)) && a;
  return <h.XZJ value={i} onClick={function() {
      i ? p.Z.dispatch({
        type: "CONTENT_INVENTORY_SET_FILTERS",
        filters: true
      }) : p.Z.dispatch({
        type: "CONTENT_INVENTORY_SET_FILTERS",
        filters: {
          types: new Set([r])
        }
      })
    }} />
}

function A() {
  var e, t;
  let a = (0, Chunk442837.e7)([Chunk146282.Z], () => Chunk146282.Z.getFeed(Chunk206583.YN.GLOBAL_FEED)),
    l = (0, Chunk442837.e7)([Chunk146282.Z], () => Chunk146282.Z.getDebugImpressionCappingDisabled()),
    i = (0, Chunk442837.e7)([Chunk71585.Z], () => Chunk71585.Z.getDebugFastImpressionCappingEnabled()),
    s = function(e) {
      let t = o().groupBy(e, e => e.content_type);
      return Object.keys(t).map(e => {
        let a = t[e];
        return {
          key: "".concat(e),
          type: a[0].content_type,
          entries: a
        }
      })
    }(null == require || null == (e = require.entries) ? true : module.map(e => e.content)),
    c = (0, Chunk442837.e7)([Chunk146282.Z], () => {
      var e;
      return (null == (e = Chunk146282.Z.getFeedState(Chunk206583.YN.GLOBAL_FEED)) ? true : module.loading) === true
    }),
    [Z, A] = Chunk73800.useState(""),
    L = (0, Chunk442837.e7)([Chunk77498.Z, Chunk812206.Z], () => {
      var e, t, a;
      return parseInt(Z) > 0 ? Z : null != (a = null == (e = Chunk77498.Z.getGameByName(Z)) ? true : module.id) ? require : null == (t = Chunk812206.Z.getApplicationByName(Z)) ? true : exports.id
    }, [Z]),
    B = (0, Chunk168524.Z)({
      applicationId: L,
      location: "DevToolsContentInventory",
      source: Chunk810568.m1.DevTools
    }),
    M = Object.entries(null != (t = Chunk433517.K.get("GameProfileModal")) ? exports : {}).filter(e => {
      let [t, a] = e;
      return a
    }).map(e => {
      let [t] = e;
      return t
    }),
    F = (0, Chunk835473.Z)(M).filter(Chunk823379.lm),
    U = (0, Chunk442837.e7)([Chunk550532.Z], () => Chunk550532.Z.getFakeGameToShow());
  return <div className={Chunk616257.panel}><Chunk481060.zJl className={Chunk403542.content}>{<Chunk481060.hjN>{<Chunk481060.vwX>{"Inventory"}</Chunk481060.vwX>}{Chunk392711.length > 0 && <Chunk681619.Z columns={R} data={Chunk392711} />}{<Chunk481060.LZC size={8} />}{<Chunk789086.Z />}{<Chunk481060.zxk variant={"primary"} text={"Refresh Now"} fullWidth={true} onClick={function() {
            Chunk570140.Z.dispatch({
              type: "CONTENT_INVENTORY_MANUAL_REFRESH",
              feedId: Chunk206583.YN.GLOBAL_FEED,
              feature: Chunk126313.L.INBOX
            })
          }} loading={Chunk876215} />}</Chunk481060.hjN>}{<Chunk481060.hjN>{<Chunk481060.vwX>{"Impression Capping"}</Chunk481060.vwX>}{<Chunk481060.zxk variant={"primary"} text={"Clear Impressions"} fullWidth={true} onClick={function() {
            Chunk570140.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS"
            })
          }} />}{<Chunk481060.LZC size={8} />}{<Chunk481060.zxk variant={"primary"} text={"Log Impressions"} fullWidth={true} onClick={function() {
            Chunk570140.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS"
            })
          }} />}{<Chunk481060.LZC size={8} />}{<Chunk481060.zxk variant={"primary"} text={Chunk120356 ? "Enable Impression Capping" : "Disable Impression Capping"} fullWidth={true} onClick={function() {
            Chunk570140.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING"
            })
          }} />}{<Chunk481060.LZC size={8} />}{<Chunk481060.zxk variant={"primary"} text={i ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping"} fullWidth={true} onClick={function() {
            Chunk570140.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING"
            })
          }} />}</Chunk481060.hjN>}{false}{<Chunk650613.Z />}{<Chunk481060.hjN>{<Chunk481060.vwX>{"Game Profile"}</Chunk481060.vwX>}{<Chunk755721.Is placeholder={"App ID or full name"} onChange={e => (0 === e.length || e.length >= 18) && A(e)} onKeyDown={e => {
            "Enter" === e.key && (Z === e.currentTarget.value ? null == B || B(e) : A(e.currentTarget.value))
          }} error={Z.length > 0 && null == B ? "No game profile for ".concat(null != L ? L : Z + " - try by id", ".") : true} style={null != B ? {
            border: "1px solid green"
          } : {}} />}{<ul>{F.map(e => (0, n.jsx)("li", {
            children: (0, n.jsx)(D, {
              application: e
            })
          }, "follow-game-".concat(e.id)))}</ul>}</Chunk481060.hjN>}{<Chunk481060.hjN>{<Chunk481060.vwX>{"Activity Sharing"}</Chunk481060.vwX>}{<Chunk481060.Text variant={"text-md/normal"}>{"Force show game:"}</Chunk481060.Text>}{<Chunk481060.PhF options={Chunk780106.h.map(e => ({
            label: e,
            value: e
          }))} isSelected={e => e === U} select={function(e) {
            p.Z.dispatch({
              type: "CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING",
              gameToShow: e
            })
          }} serialize={e => e} popoutLayerContext={Chunk246992.O$} />}</Chunk481060.hjN>}</Chunk481060.zJl></div>
}
let D = e => {
  let {
    application: t
  } = e, a = (0, _.Z)({
    applicationId: t.id,
    location: "DevToolsContentInventory",
    source: g.m1.DevTools
  });
  return <h.P3F onClick={a} style={{
      margin: "2px",
      cursor: "pointer"
    }}><h.Text variant={"text-xs/normal"} color={"text-muted"}>{t.name}</h.Text></h.P3F>
}