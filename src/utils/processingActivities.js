const getCurrentActivity = (activities, currentIndex) => {
    if (activities.length === 0 || currentIndex === null) {
        return null;
    } else {
        return activities[currentIndex];
    }
};

const getFinishedActivities = (activities, currentIndex) => {
    if (activities.length === 0 || currentIndex === null || currentIndex === 0) {
        return [];
    } else {
        return activities.slice(0, currentIndex);
    }
};

const getQueuedActivities = (activities, currentIndex) => {
    if (activities.length === 0 || currentIndex === null) {
        return [];
    } else {
        return activities.slice(currentIndex + 1);
    }
}

export { getCurrentActivity, getFinishedActivities, getQueuedActivities };