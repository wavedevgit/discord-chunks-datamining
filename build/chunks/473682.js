/** Chunk was on 51711 **/
/** chunk id: 473682, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  IU: () => p,
  M4: () => o,
  Ne: () => c,
  T9: () => l,
  Vb: () => i,
  cF: () => m,
  gM: () => u,
  hK: () => s,
  mg: () => h,
  zI: () => d
});
var a, r, i = 12633 == require.j ? ((a = {}).SELECT_GAME = "select-game", a.SERVER_SETTINGS = "server-settings", a) : null;
let l = {
    steps: {
      "select-game": {
        onBack: {
          type: "close"
        },
        onNext: {
          type: "go-to-step",
          step: "server-settings"
        }
      },
      "server-settings": {
        onBack: {
          type: "go-to-step",
          step: "select-game"
        },
        onNext: {
          type: "save"
        }
      }
    }
  },
  s = 24,
  o = 680,
  c = 12633 == require.j ? o - 2 * s : null,
  d = 10,
  u = 32,
  m = 1e3,
  p = "staging" === window.GLOBAL_ENV.PROJECT_ENV ? "1415044199572832256" : "1415025086791942144";
var h = 12633 == require.j ? ((r = {})[r.SHOCKBYTE = 0] = "SHOCKBYTE", r) : null