/** Chunk was on 21738 **/
/** chunk id: 391510, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js"), require("./938796.js"), require("./65821.js"), require("./747238.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk179771 = require("./179771.js"),
  Chunk599026 = require("./599026.js"),
  Chunk73153 = require("./73153.js"),
  Chunk182892 = require("./182892.js"),
  Chunk587895 = require("./587895.js"),
  Chunk207371 = require("./207371.js"),
  Chunk954571 = require("./954571.js"),
  Chunk139675 = require("./139675.js"),
  Chunk927813 = require("./927813.js"),
  Chunk636401 = require("./636401.js"),
  Chunk629471 = require("./629471.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");
let _ = ["1402418171662569542"],
  b = {
    [Chunk652215.e$_.SET_ACTIVITY]: {
      scope: {
        [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk179771.F.RPC_ACTIVITIES_WRITE, Chunk613057.hj]
      },
      validation: e => (0, f.A)(e).required().keys({
        pid: e.number().min(0),
        activity: (0, f.A)(e).keys({
          name: e.string().min(1).max(128),
          state: e.string().min(2).max(128),
          state_url: e.string().uri().min(1).max(256),
          details: e.string().min(2).max(128),
          details_url: e.string().uri().min(1).max(256),
          timestamps: (0, f.A)(e).keys({
            start: e.number().min(1),
            end: e.number().min(1)
          }),
          assets: (0, f.A)(e).keys({
            large_image: e.string().min(1).max(300),
            large_text: e.string().min(2).max(128),
            large_url: e.string().uri().min(1).max(256),
            small_image: e.string().min(1).max(300),
            small_text: e.string().min(2).max(128),
            small_url: e.string().uri().min(1).max(256),
            invite_cover_image: e.string().min(1).max(300)
          }),
          party: (0, f.A)(e).keys({
            id: e.string().min(2).max(128),
            size: e.array().items(e.number().min(0)).length(2),
            privacy: e.number().default(A.KIY.PRIVATE).valid([A.KIY.PRIVATE, A.KIY.PUBLIC])
          }),
          secrets: (0, f.A)(e).keys({
            match: e.string().min(2).max(128),
            join: e.string().min(2).max(128),
            spectate: e.string().min(2).max(128)
          }),
          buttons: e.array().items((0, f.A)(e).keys({
            label: e.string().min(1).max(32).required(),
            url: e.string().uri().min(1).max(512).required()
          })).min(1).max(2),
          instance: e.boolean(),
          supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(10),
          type: e.number().default(A.$pd.PLAYING).valid(A.$pd.PLAYING, A.$pd.LISTENING, A.$pd.WATCHING, A.$pd.COMPETING),
          status_display_type: e.number().optional().valid(a.A.NAME, a.A.STATE, a.A.DETAILS)
        }).allow(null)
      }),
      handler(e) {
        var t, n, r;
        let l, {
          socket: a,
          args: {
            pid: f,
            activity: b
          },
          isSocketConnected: E
        } = e;
        if (![m.z4.IPC, m.z4.WEBSOCKET, m.z4.POST_MESSAGE].includes(a.transport)) throw new g.A({
          errorCode: A.Lw6.INVALID_COMMAND
        }, 'command not available from "'.concat(a.transport, '" transport'));
        if (null == f && m.z4.IPC === a.transport) throw new g.A({
          errorCode: A.Lw6.INVALID_COMMAND
        }, "nonzero pid required");
        if (null == b) return s.h.dispatch({
          type: "LOCAL_ACTIVITY_UPDATE",
          socketId: a.id,
          pid: f,
          activity: b
        }), Promise.resolve(b);
        let O = {};
        b.name || (b.name = a.application.name);
        let y = a.application.id;
        b.application_id = y;
        let I = a.transport === m.z4.POST_MESSAGE;
        b.platform = I ? A.yTV.EMBEDDED : A.yTV.DESKTOP;
        let v = c.A.getApplication(null != y ? y : true),
          S = null != (t = b.instance) && t,
          C = null == (n = b.party) ? true : n.privacy;
        delete b.instance, null == (r = b.party) || delete r.privacy;
        let N = (0, o.E)(b, S, I, null != v && (0, u.x)(v) && I, C);
        N > 0 && (b.flags = N);
        let {
          assets: T,
          party: j,
          secrets: x,
          timestamps: P,
          buttons: w,
          type: L
        } = b;
        if (null == L && (b.type = A.$pd.PLAYING), null != x) {
          let e = i().values(x).filter(e => !!e);
          if (null != j && i().intersection(e, [j.id]).length > 0 && !_.includes(a.application.id)) throw new g.A({
            errorCode: A.Lw6.INVALID_ACTIVITY_SECRET
          }, "secrets cannot match the party id");
          if (i().uniq(e).length < e.length) throw new g.A({
            errorCode: A.Lw6.INVALID_ACTIVITY_SECRET
          }, "secrets must be unique");
          if (null != w) throw new g.A({
            errorCode: A.Lw6.INVALID_ACTIVITY_SECRET
          }, "secrets cannot currently be sent with buttons")
        }
        if (null != w && (O.button_urls = w.map(e => e.url), b.buttons = w.map(e => e.label)), b.metadata = O, null != P)
          for (let e of Object.keys(P)) Date.now().toString().length - P[e].toString().length > 2 && (P[e] = Math.floor(P[e] * h.A.Millis.SECOND));
        if (null == T) l = Promise.resolve([]);
        else {
          if (null == a.application || null == a.application.id) throw Error();
          l = (0, p.RG)(a.application.id, [T.large_image, T.small_image, T.invite_cover_image])
        }
        return l.then(e => {
          var t, n, r, i;
          let [l, o, c] = e;
          if (null != T && (null != l ? T.large_image = l : delete T.large_image, null != o ? T.small_image = o : delete T.small_image, null != c ? T.invite_cover_image = c : delete T.invite_cover_image), !E()) return;
          s.h.dispatch({
            type: "LOCAL_ACTIVITY_UPDATE",
            socketId: a.id,
            pid: f,
            activity: b,
            partyPrivacy: C
          });
          let {
            secrets: u,
            party: p
          } = b, h = {
            application_id: a.application.id,
            type: b.type,
            name: b.name,
            status_display_type: b.status_display_type,
            details: null != (t = b.details) ? t : "",
            state: null != (n = b.state) ? n : "",
            has_urls: null != b.state_url || null != b.details_url || (null == (r = b.assets) ? true : r.large_url) != null || (null == (i = b.assets) ? true : i.small_url) != null
          };
          return null != u && (h.has_match_secret = !!u.match, h.has_join_secret = !!u.join), null != T && (h.has_images = !!(T.large_image || T.small_image || T.invite_cover_image)), null != p && (h.party_max = null != p.size && p.size[1] > 0 ? p.size[1] : true, h.party_id = p.id), d.default.track(A.HAw.ACTIVITY_UPDATED, h), b
        })
      }
    }
  }