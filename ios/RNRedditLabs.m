
#import "RNRedditLabs.h"

@implementation RNRedditLabs

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()
RCT_EXPORT_METHOD(openDialog:(NSString *)text image:(UIImage *)image)
{
    RCTLogInfo(@"Pretending to create text %@ and image %@", text, image);
}
@end
  
