import Modal from "react-native-modal";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import image from "@/assets/images/download.jpg";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { router } from "expo-router";

export default function Home() {
  const [ongoing, setOngoing] = useState(true);
  const toggleTab = (status) => () => setOngoing(status);

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedFeed, setSelectedFeed] = useState(null);

  const toggleModal = (feedInfo) => {
    setSelectedFeed(feedInfo);
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box1}>
        <TouchableWithoutFeedback onPress={toggleTab(true)}>
          <Text style={[styles.heading, ongoing && styles.headingBold]}>
            Ongoing
          </Text>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={toggleTab(false)}>
          <Text style={[styles.heading, !ongoing && styles.headingBold]}>
            Upcoming
          </Text>
        </TouchableWithoutFeedback>
      </View>

      {ongoing ? (
        <View style={styles.collection}>
          <TouchableWithoutFeedback
            onPress={() =>
              toggleModal({
                title: "Vote for Student Representative",
                candidates: 5,
              })
            }
          >
            <View style={styles.feed}>
              <View style={styles.newsfeedDetails}>
                <Text style={styles.topic}>
                  Vote for Student Representative
                </Text>
                <Text style={styles.duration}>
                  April 8th - 10th 8am to 10pm
                </Text>
                <Text style={styles.subtopic}>
                  Student Representatives are known as enrolled scholars at
                  their institution elected for a specific term to represent the
                  student
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() =>
              toggleModal({
                title: "Vote for Student Representative",
                candidates: 5,
              })
            }
          >
            <View style={styles.feed}>
              <View style={styles.newsfeedDetails}>
                <Text style={styles.topic}>
                  Vote for Student Representative
                </Text>
                <Text style={styles.duration}>
                  April 8th - 10th 8am to 10pm
                </Text>
                <Text style={styles.subtopic}>
                  Student Representatives are known as enrolled scholars at
                  their institution elected for a specific term to represent the
                  student
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      ) : (
        <View style={styles.collection}>
          <TouchableWithoutFeedback
            onPress={() =>
              toggleModal({
                title: "Vote for Student President",
                candidates: 4,
              })
            }
          >
            <View style={styles.feed}>
              <View style={styles.newsfeedDetails}>
                <Text style={styles.topic}>Vote for Student President</Text>
                <Text style={styles.duration}>
                  April 8th - 10th 8am to 10pm
                </Text>
                <Text style={styles.subtopic}>
                  Student Representatives are known as enrolled scholars at
                  their institution elected for a specific term to represent the
                  student
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() =>
              toggleModal({
                title: "Vote for Student President",
                candidates: 4,
              })
            }
          >
            <View style={styles.feed}>
              <View style={styles.newsfeedDetails}>
                <Text style={styles.topic}>Vote for Student President</Text>
                <Text style={styles.duration}>
                  April 8th - 10th 8am to 10pm
                </Text>
                <Text style={styles.subtopic}>
                  Student Representatives are known as enrolled scholars at
                  their institution elected for a specific term to represent the
                  student
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{selectedFeed?.title}</Text>
          <Text style={styles.modalText}>
            Number of Candidates: {selectedFeed?.candidates}
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.participants}
          >
            <View style={styles.rectangle}>
              <View style={styles.circle}>
                <Image source={image} style={styles.profile} />
              </View>
              <Text style={styles.participantName}>John Doe</Text>
            </View>
            <View style={styles.rectangle}>
              <View style={styles.circle}>
                <Image source={image} style={styles.profile} />
              </View>
              <Text style={styles.participantName}>John Doe</Text>
            </View>
            <View style={styles.rectangle}>
              <View style={styles.circle}>
                <Image source={image} style={styles.profile} />
              </View>
              <Text style={styles.participantName}>John Doe</Text>
            </View>
            <View style={styles.rectangle}>
              <View style={styles.circle}>
                <Image source={image} style={styles.profile} />
              </View>
              <Text style={styles.participantName}>John Doe</Text>
            </View>
            <View style={styles.rectangle}>
              <View style={styles.circle}>
                <Image source={image} style={styles.profile} />
              </View>
              <Text style={styles.participantName}>John Doe</Text>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={styles.voteButton}
            onPress={() => {
              // Handle vote action here
              setModalVisible(false);
              router.push("/electionId"); // Navigate to the election page
            }}
          >
            <Text style={styles.voteButtonText}>Vote Now</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
    marginBottom: 100,
  },
  box1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
  heading: {
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#4f4f4f",
    borderBottomColor: "transparent",
    borderBottomWidth: 3,
    paddingBottom: 3,
    width: "fit-content",
    maxWidth: 220,
    alignSelf: "center",
    marginBottom: 12,
    marginTop: 26,
  },
  headingBold: {
    color: "#E8612D",
    borderBottomColor: "#E8612D",
    borderBottomWidth: 3,
  },
  collection: {
    flexDirection: "column",
    gap: 20,
  },
  feed: {
    width: "100%",
    height: 200,
    backgroundColor: "#F6C6B3",
    borderRadius: 30,
    padding: 10,
    alignContent: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderWidth: 1,
    borderColor: "#E8612D",
  },
  topic: {
    fontSize: 22,
    fontWeight: 600,
    textAlign: "center",
  },
  duration: {
    fontSize: 18,
    fontWeight: 600,
    color: "#4f4f4f",
    marginBottom: 10,
    textAlign: "center",
  },
  subtopic: {
    fontSize: 14,
    fontWeight: 500,
    textAlign: "center",
  },
  more: {
    alignSelf: "flex-end",
  },
  moreText: {
    fontSize: 16,
  },

  modal: {
    justifyContent: "center",
    margin: 0,
  },

  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    height: "350",
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
  },
  participants: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
  },
  rectangle: {
    width: 100,
    minHeight: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  participantName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  profile: {
    width: "100%",
    height: "100%",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: "center",
  },
  voteButton: {
    backgroundColor: "#E8612D",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    borderRadius: 30,
  },
  voteButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
