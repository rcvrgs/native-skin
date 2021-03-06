//
// Copyright (c) 2016 Ooyala, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>

@class OOPerformanceStatisticsSnapshotBuilder;

/**
 * Minimal stuff an OOPerformanceEventWatch object should implement.
 * Notficiation events of interest; a method to call when they are seen; and a way to get statistics results from those.
 */
@protocol OOPerformanceEventWatchProtocol <NSObject>
@property (nonatomic, readonly) NSSet *wantedNotifications; /**< NSSet of *NSStrings. */
-(void) onNotification:(NSNotification*)notification;
-(void) addStatisticsToBuilder:(OOPerformanceStatisticsSnapshotBuilder*)builder;
@end