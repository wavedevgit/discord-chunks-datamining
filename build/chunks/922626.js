/** Chunk was on 20501 **/
/** chunk id: 922626, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk809206 = require("./809206.js");

function s(e) {
  let {
    onSuccess: t,
    onError: n
  } = e, [s, a] = i.useState(false);
  return {
    handleApplyDisplayNameStyles: i.useCallback(async e => {
      a(true);
      try {
        await (0, r.Mn)({
          displayNameStyles: e
        }), null == t || t()
      } catch (e) {
        null == n || n(e)
      } finally {
        a(false)
      }
    }, [t, n]),
    isApplying: s
  }
}