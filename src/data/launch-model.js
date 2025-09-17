export function createLaunchModels(data) {
  return data.results.map((launch) => ({
    id: launch.id,
    url: launch.url,
    name: launch.name,
    status: launch.status?.name,
    launchDate: launch.net,
    lastUpdated: launch.last_updated,
    imgUrl: launch.image?.image_url,
    thumbnailUrl: launch.image?.thumbnail_url,
    rocket: {
      id: launch.rocket?.id,
      name: launch.rocket?.configuration.full_name,
    },
    mission: {
      id: launch.mission?.id,
      name: launch.mission?.name,
      type: launch.mission?.type,
      description: launch.mission?.description,
    },
    orbit: {
      name: launch.mission?.orbit?.name,
      celestialBody: launch.mission?.orbit?.celestial_body.name,
    },
    agencies: createAgencyModels(launch.mission?.agencies ?? []),
    launchPad: {
      name: launch.pad?.name,
      url: launch.pad?.url,
      description: launch.pad?.description,
      mapUrl: launch.pad?.map_url,
      latitude: launch.pad?.latitude,
      longitude: launch.pad?.longitude,
      country: launch.pad?.country?.name,
    },
  }));
}

function createAgencyModels(agencyData) {
  return agencyData.map((agency) => ({
    name: agency.name,
    type: agency.type?.name,
    country: agency.country[0]?.name,
    description: agency.description,
    administrator: agency.administrator,
    founded: agency.founding_year,
    imageUrl: agency.image?.image_url,
    thumbnailUrl: agency.image?.thumbnail_url,
    imageName: agency.image?.name,
    launchStats: {
      totalLaunchCount: agency.total_launch_count,
      consecutiveSuccessfulLaunches: agency.consecutive_successful_launches,
      successfulLaunches: agency.successful_launches,
      failedLaunches: agency.failed_launches,
      pendingLaunches: agency.pending_launches,
      consecutiveSuccessfulLandings: agency.consecutive_successful_landings,
      successfulLandings: agency.successful_landings,
      failedLandings: agency.failed_landings,
      attemptedLandings: agency.attempted_landings,
      successfulLandingsSpacecraft: agency.successful_landings_spacecraft,
      failedLandingsSpacecraft: agency.failed_landings_spacecraft,
      attemptedLandingsSpacecraft: agency.attempted_landings_spacecraft,
      successfulLandingsPayload: agency.successful_landings_payload,
      failedLandingsPayload: agency.failed_landings_payload,
      attemptedLandingsPayload: agency.attempted_landings_payload,
    },
  }));
}
