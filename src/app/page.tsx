"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Define skill types
type SkillLevel = "BEGINNER" | "INTERMEDIATE" | "EXPERT";
type SkillCategory = "TECHNICAL" | "MANAGEMENT" | "SOFT SKILLS";

interface Skill {
  id: number;
  name: string;
  category: SkillCategory;
  proficiency: SkillLevel;
}

export default function Home() {
  // Sample skills data
  const [skills, setSkills] = useState<Skill[]>([
    { id: 1, name: "Ruby", category: "TECHNICAL", proficiency: "BEGINNER" },
    { id: 2, name: "jQuery", category: "TECHNICAL", proficiency: "EXPERT" },
    { id: 3, name: "HTML", category: "TECHNICAL", proficiency: "BEGINNER" },
    { id: 4, name: "JS", category: "MANAGEMENT", proficiency: "INTERMEDIATE" },
    { id: 5, name: "CSS", category: "TECHNICAL", proficiency: "INTERMEDIATE" },
  ]);

  // Handle edit skill (placeholder function)
  const handleEdit = (id: number) => {
    console.log(`Edit skill with id: ${id}`);
    // Implementation would go here in a real app
  };

  // Handle delete skill
  const handleDelete = (id: number) => {
    try {
      setSkills(skills.filter((skill) => skill.id !== id));
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  // Get badge color based on proficiency
  const getBadgeVariant = (proficiency: SkillLevel) => {
    switch (proficiency) {
      case "BEGINNER":
        return "secondary";
      case "INTERMEDIATE":
        return "default";
      case "EXPERT":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Skill</h1>
        <Button>Add Skill</Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow className="text-gray-800 font-semibold">
              <TableHead>Skill Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Proficiency</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {skills.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  No skills found
                </TableCell>
              </TableRow>
            ) : (
              skills.map((skill) => (
                <TableRow key={skill.id}>
                  <TableCell>{skill.name}</TableCell>
                  <TableCell>{skill.category}</TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(skill.proficiency)}>
                      {skill.proficiency}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(skill.id)}
                      >
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(skill.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between items-center">
        <Button style={{ backgroundColor: "#D8BFD8", color: "white" }}>
          Previous
        </Button>
        <span>Page 1 of 3</span>
        <Button style={{ backgroundColor: "#6A5ACD", color: "white" }}>
          Next
        </Button>
      </div>
    </div>
  );
}
