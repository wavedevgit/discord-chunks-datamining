/** Chunk was on 1272 **/
/** chunk id: 647656, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./997841.js"), require("./415506.js"), require("./35282.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk243814 = require("./243814.js"),
  Chunk734959 = require("./734959.js"),
  Chunk570140 = require("./570140.js"),
  Chunk212517 = require("./212517.js"),
  Chunk812206 = require("./812206.js"),
  Chunk686440 = require("./686440.js"),
  Chunk626135 = require("./626135.js"),
  Chunk81063 = require("./81063.js"),
  Chunk70956 = require("./70956.js"),
  Chunk996106 = require("./996106.js"),
  Chunk452426 = require("./452426.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");
let E = ["1402418171662569542"],
  _ = {
    [Chunk981631.Etm.SET_ACTIVITY]: {
      scope: {
        [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk243814.x.RPC_ACTIVITIES_WRITE, Chunk186901.lH]
      },
      validation: e => (0, h.Z)(e).required().keys({
        pid: e.number().min(0),
        activity: (0, h.Z)(e).keys({
          name: e.string().min(1).max(128),
          state: e.string().min(2).max(128),
          state_url: e.string().uri().min(1).max(256),
          details: e.string().min(2).max(128),
          details_url: e.string().uri().min(1).max(256),
          timestamps: (0, h.Z)(e).keys({
            start: e.number().min(1),
            end: e.number().min(1)
          }),
          assets: (0, h.Z)(e).keys({
            large_image: e.string().min(1).max(300),
            large_text: e.string().min(2).max(128),
            large_url: e.string().uri().min(1).max(256),
            small_image: e.string().min(1).max(300),
            small_text: e.string().min(2).max(128),
            small_url: e.string().uri().min(1).max(256),
            invite_cover_image: e.string().min(1).max(300)
          }),
          party: (0, h.Z)(e).keys({
            id: e.string().min(2).max(128),
            size: e.array().items(e.number().min(0)).length(2),
            privacy: e.number().default(b.RYY.PRIVATE).valid([b.RYY.PRIVATE, b.RYY.PUBLIC])
          }),
          secrets: (0, h.Z)(e).keys({
            match: e.string().min(2).max(128),
            join: e.string().min(2).max(128),
            spectate: e.string().min(2).max(128)
          }),
          buttons: e.array().items((0, h.Z)(e).keys({
            label: e.string().min(1).max(32).required(),
            url: e.string().uri().min(1).max(512).required()
          })).min(1).max(2),
          instance: e.boolean(),
          supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(10),
          type: e.number().default(b.IIU.PLAYING).valid(b.IIU.PLAYING, b.IIU.LISTENING, b.IIU.WATCHING, b.IIU.COMPETING),
          status_display_type: e.number().optional().valid(a.D.NAME, a.D.STATE, a.D.DETAILS)
        }).allow(null)
      }),
      handler(e) {
        var t, n, r;
        let l, {
          socket: a,
          args: {
            pid: h,
            activity: _
          },
          isSocketConnected: O
        } = e;
        if (![m.He.IPC, m.He.WEBSOCKET, m.He.POST_MESSAGE].includes(a.transport)) throw new g.Z({
          errorCode: b.lTL.INVALID_COMMAND
        }, 'command not available from "'.concat(a.transport, '" transport'));
        if (null == h && m.He.IPC === a.transport) throw new g.Z({
          errorCode: b.lTL.INVALID_COMMAND
        }, "nonzero pid required");
        if (null == _) return o.Z.dispatch({
          type: "LOCAL_ACTIVITY_UPDATE",
          socketId: a.id,
          pid: h,
          activity: _
        }), Promise.resolve(_);
        let I = {};
        _.name || (_.name = a.application.name);
        let v = a.application.id;
        _.application_id = v;
        let y = a.transport === m.He.POST_MESSAGE;
        _.platform = y ? b.M7m.EMBEDDED : b.M7m.DESKTOP;
        let C = c.Z.getApplication(null != v ? v : true),
          S = null != (r = _.instance) && r,
          T = null == (t = _.party) ? true : t.privacy;
        delete _.instance, null == (n = _.party) || delete n.privacy;
        let N = (0, s.S)(_, S, y, null != C && (0, u.g)(C) && y, T);
        N > 0 && (_.flags = N);
        let {
          assets: j,
          party: x,
          secrets: P,
          timestamps: A,
          buttons: Z,
          type: w
        } = _;
        if (null == w && (_.type = b.IIU.PLAYING), null != P) {
          let e = i().values(P).filter(e => !!e);
          if (null != x && i().intersection(e, [x.id]).length > 0 && !E.includes(a.application.id)) throw new g.Z({
            errorCode: b.lTL.INVALID_ACTIVITY_SECRET
          }, "secrets cannot match the party id");
          if (i().uniq(e).length < e.length) throw new g.Z({
            errorCode: b.lTL.INVALID_ACTIVITY_SECRET
          }, "secrets must be unique");
          if (null != Z) throw new g.Z({
            errorCode: b.lTL.INVALID_ACTIVITY_SECRET
          }, "secrets cannot currently be sent with buttons")
        }
        if (null != Z && (I.button_urls = Z.map(e => e.url), _.buttons = Z.map(e => e.label)), _.metadata = I, null != A)
          for (let e of Object.keys(A)) Date.now().toString().length - A[e].toString().length > 2 && (A[e] = Math.floor(A[e] * f.Z.Millis.SECOND));
        if (null == j) l = Promise.resolve([]);
        else {
          if (null == a.application || null == a.application.id) throw Error();
          l = (0, p.hR)(a.application.id, [j.large_image, j.small_image, j.invite_cover_image])
        }
        return l.then(e => {
          var t, n, r, i;
          let [l, s, c] = e;
          if (null != j && (null != l ? j.large_image = l : delete j.large_image, null != s ? j.small_image = s : delete j.small_image, null != c ? j.invite_cover_image = c : delete j.invite_cover_image), !O()) return;
          o.Z.dispatch({
            type: "LOCAL_ACTIVITY_UPDATE",
            socketId: a.id,
            pid: h,
            activity: _,
            partyPrivacy: T
          });
          let {
            secrets: u,
            party: p
          } = _, f = {
            application_id: a.application.id,
            type: _.type,
            name: _.name,
            status_display_type: _.status_display_type,
            details: null != (r = _.details) ? r : "",
            state: null != (i = _.state) ? i : "",
            has_urls: null != _.state_url || null != _.details_url || (null == (t = _.assets) ? true : t.large_url) != null || (null == (n = _.assets) ? true : n.small_url) != null
          };
          return null != u && (f.has_match_secret = !!u.match, f.has_join_secret = !!u.join), null != j && (f.has_images = !!(j.large_image || j.small_image || j.invite_cover_image)), null != p && (f.party_max = null != p.size && p.size[1] > 0 ? p.size[1] : true, f.party_id = p.id), d.default.track(b.rMx.ACTIVITY_UPDATED, f), _
        })
      }
    }
  }