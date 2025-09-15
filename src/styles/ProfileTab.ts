import { StyleSheet

 } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    maxWidth: 400,
    alignSelf: "center",
  },
  header: {
    padding: 15,
  },
  profile: {
    alignItems: "center",
    marginTop: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ddd",
    marginBottom: 10,
  },
  ratingBadge: {
    backgroundColor: "#004aad",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
    position: "absolute",
    top: 55,
    right: "40%",
  },
  ratingText: {
    color: "#fff",
    fontWeight: "bold",
  },
  name:{
    fontSize: 14,
    color: "#666",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  stats: {
    flexDirection: "row",
    backgroundColor: "#004AAD",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  divider: {
    width: 1,
    backgroundColor: "#fff",
    marginHorizontal: 10,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  statLabel: {
    color: "#fff",
    fontSize: 14,
    marginTop: 4,
  },
  tabs :{
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    padding: 4,
    marginTop: 20,
    width: "100%",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: "center",
  },
  tabSelected: {
    backgroundColor: "#fff",
    elevation: 2,
  },
  tabText: {
    fontSize: 14,
    color: "#777",
    fontWeight: "500",
  },
  tabTextSelected: {
    color: "004aad",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#f5f5f5",
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  user: {
    fontWeight: "bold",
    fontSize: 14,
  },
  comment: {
    marginVertical: 5,
    fontSize: 14,
  },
  stars: {
    color: "#004aad",
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: "#666",
  },
  information: {
    marginHorizontal: 20,
    fontSize: 14,
    color: "#444",
  },
});