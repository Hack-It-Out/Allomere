import {
  Center,
  Col,
  Container,
  Flex,
  Grid,
  Progress,
  Text,
} from "@mantine/core";
import React from "react";
import * as styles from "./index.modules.css";
import {
  IconPlayerPlay,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconPlayerPause,
  IconPlayerSkipForward,
  IconPlayerSkipBack,
  IconVolume
} from "@tabler/icons";

const Home = () => {
  return (
    <Container
      size="xl"
      style={{ height: "100vh", backgroundColor: "#191970" }}
      fluid
    >
      <Center style={{ width: "100%", height: "100%" }}>
        <Flex direction="column" style={{ width: "100%" }}>
          <Progress value={50} color="orange"  style={{ width: "100%" }} />

          <Grid style={{ marginTop: 10 }}>
            <Col span={5}>
              <Text weight={700} size="xl" style={{ color: "white" }}>
                MUD
              </Text>
              <Text>by Flumes</Text>
            </Col>
            <Col span={3}>
              <Flex align="center" gap="xl" style={{cursor: 'pointer'}}>
                {/* <IconPlayerSkipBack /> */}
                <IconPlayerTrackPrev color="white" stroke={2} size={26} />
                <IconPlayerPlay color="white" stroke={2} size={36} />
                <IconPlayerTrackNext color="white" stroke={2} size={26} />
              </Flex>
            </Col>
            <Col span={4}> 
              <Flex align="flex-end" justify="flex-end" style={{marginRight: 40}}>
              <IconVolume color="white" stroke={2} size={26} />
              </Flex>
            </Col>
          </Grid>
        </Flex>
      </Center>
    </Container>
  );
};

export default Home;
