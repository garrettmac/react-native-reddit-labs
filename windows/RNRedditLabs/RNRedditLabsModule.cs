using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Com.Reactlibrary.RNRedditLabs
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNRedditLabsModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNRedditLabsModule"/>.
        /// </summary>
        internal RNRedditLabsModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNRedditLabs";
            }
        }
    }
}
